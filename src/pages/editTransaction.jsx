import { useState } from "react";
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
  const params = useParams();
  const parseExistData = JSON.parse(localStorage.getItem("expenses"));
  const parseSmallExistData = parseExistData.filter((exp) => exp.id !== parseInt(params.id));
  const parseEditData = parseExistData.filter((exp) => exp.id === parseInt(params.id));
  const [category, setCategory] = useState(parseEditData[0].category);
  const [date, setDate] = useState(parseEditData[0].date);
  const [amount, setAmount] = useState(parseEditData[0].amount);
  const [type, setType] = useState(parseEditData[0].type);
  const navigate = useNavigate();

  const currentUserId = JSON.parse(localStorage.getItem("id"));
  const expenseData = {
    userId: currentUserId,
    id: new Date().getTime(),
    type,
    category,
    date,
    amount: parseInt(amount),
  };
  const uploadExpenses = () => {
    if (!category || !date || !amount) {
      alert("Please fill out the form completely");
      return;
    }
    const fullData = [expenseData, ...parseSmallExistData];
    localStorage.setItem("expenses", JSON.stringify(fullData));
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
        <input type="radio" value="Income" name="source" id="Income" onClick={() => typeCheckerIncome()} defaultChecked={type === "Income"} />

        <StyledRedLabel htmlFor="Expense">Expense </StyledRedLabel>
        <StyledRadioInput
          type="radio"
          value="Expense"
          name="source"
          id="Expense"
          onClick={() => typeCheckerExpense()}
          defaultChecked={type === "Expense"}
        />
      </div>
      <div>
        <StyledLabel htmlFor="category">Category: </StyledLabel>
        <StyledSelect
          id="category"
          defaultValue={category}
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
