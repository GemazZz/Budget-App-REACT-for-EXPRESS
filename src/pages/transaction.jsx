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
import { Link, useNavigate } from "react-router-dom";

const Transaction = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
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
    const existData = localStorage.getItem("expenses");
    const parseExistData = JSON.parse(existData);
    const fullData = [expenseData, ...parseExistData];
    localStorage.setItem("expenses", JSON.stringify(fullData));
    navigate("/");
  };
  const typeCheckerIncome = () => {
    setType("Income");
  };
  const typeCheckerExpense = () => {
    setType("Expense");
  };

  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>New transaction</StyledTransactionH1>
      <div>
        <StyledGreenLabel htmlFor="Income">Income </StyledGreenLabel>
        <input type="radio" value="Income" name="source" id="Income" onClick={() => typeCheckerIncome()} />

        <StyledRedLabel htmlFor="Expense">Expense </StyledRedLabel>
        <StyledRadioInput type="radio" value="Expense" name="source" id="Expense" onClick={() => typeCheckerExpense()} />
      </div>
      <div>
        <StyledLabel htmlFor="category">Category: </StyledLabel>
        <StyledSelect
          id="category"
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
