import { useState, useEffect } from "react";
import {
  StyledDiv,
  StyledCloseBtn,
  StyledTransactionH1,
  StyledRadioInput,
  StyledGreenLabel,
  StyledRedLabel,
  StyledLabel,
  StyledSelect,
  StyledDateLabel,
  StyledSubmitBtn,
  StyledAmountLabel,
  StyledDateInput,
  StyledNumberInput,
} from "../styles/transactionStyle";
import { Link, useNavigate, useParams } from "react-router-dom";

const Transaction = () => {
  const params = useParams().id;
  const URL = `http://localhost:3000/api/v1/${params}`;
  const [parseEditData, setParseEditData] = useState({});
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(sessionStorage.getItem("accessToken")),
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await res.json();
      setParseEditData(data.foundExpense);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setType(parseEditData.type);
    setCategory(parseEditData.category);
    setDate(parseEditData.date);
    setAmount(parseEditData.amount);
  }, [parseEditData]);

  const navigate = useNavigate();
  const expenseData = {
    type,
    category,
    date,
    amount: parseInt(amount),
  };
  const uploadExpenses = async () => {
    if (!category || !date || !amount) {
      alert("Please fill out the form completely");
      return;
    }
    const fetchData = async () => {
      try {
        const res = await fetch(URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(sessionStorage.getItem("accessToken")),
          },
          body: JSON.stringify(expenseData),
        });
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await res.json();
        setParseEditData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    await fetchData();
    navigate("/");
  };
  const typeCheckerIncome = () => {
    setCategory();
    setType("Income");
  };
  const typeCheckerExpense = () => {
    setCategory();
    setType("Expense");
  };

  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Edit transaction</StyledTransactionH1>
      <div>
        <StyledGreenLabel htmlFor="Income">Income </StyledGreenLabel>
        <StyledRadioInput
          type="radio"
          value="Income"
          name="source"
          id="Income"
          onClick={() => typeCheckerIncome()}
          checked={type === "Income"}
        />

        <StyledRedLabel htmlFor="Expense">Expense </StyledRedLabel>
        <StyledRadioInput
          type="radio"
          value="Expense"
          name="source"
          id="Expense"
          onClick={() => typeCheckerExpense()}
          checked={type === "Expense"}
        />
      </div>
      <div>
        <StyledLabel htmlFor="category">Category: </StyledLabel>
        <StyledSelect
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="empty" selected>
            Select one
          </option>
          {type === "Income" && <option value="Salary">Salary</option>}
          {type === "Income" && <option value="Check">Check</option>}
          {type === "Income" && <option value="Bonus">Bonus</option>}
          {type === "Expense" && <option value="Shopping">Shopping</option>}
          {type === "Expense" && <option value="Family">Family</option>}
          {type === "Expense" && <option value="Others">Others</option>}
        </StyledSelect>
      </div>
      <div>
        <StyledDateLabel htmlFor="date">Select date: </StyledDateLabel>
        <StyledDateInput
          type="date"
          id="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          defaultValue={date}
        />
      </div>
      <div>
        <StyledAmountLabel htmlFor="amount">Amount: </StyledAmountLabel>
        <StyledNumberInput
          type="number"
          id="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          defaultValue={amount}
        />
      </div>
      <StyledSubmitBtn
        onClick={() => {
          uploadExpenses();
        }}
      >
        Submit
      </StyledSubmitBtn>
    </StyledDiv>
  );
};
export default Transaction;
