import { useState } from "react";
import {
  StyledLabel,
  StyledFilterDiv,
  StyledInput,
  StyledSelect,
  StyledRadioInput,
  StyledFilterBtn,
  StyledInputNumber,
  StyledGreenLabel,
  StyledRedLabel,
} from "../styles/filterStyle";

const Filter = (props) => {
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  const [minAmount, setMinAmount] = useState();
  const [maxAmount, setMaxAmount] = useState();
  const [type, setType] = useState();
  const typeCheckerIncome = () => {
    setType("Income");
  };
  const typeCheckerExpense = () => {
    setType("Expense");
  };
  const filterSelected = () => {
    let filters = {};
    if (minAmount) {
      filters["minAmount"] = parseInt(minAmount);
    }

    if (maxAmount) {
      filters["maxAmount"] = parseInt(maxAmount);
    }

    if (date) {
      filters["date"] = date;
    }

    if (type) {
      filters["type"] = type;
    }
    if ((filters["category"] = "empty")) {
      delete filters["category"];
    }
    if (category) {
      filters["category"] = category;
    }
    props.onFiltersSelect(filters);
  };
  return (
    <StyledFilterDiv>
      <StyledLabel htmlFor="data">Created at:</StyledLabel>
      <StyledInput
        type="date"
        id="date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <StyledLabel htmlFor="type">Type: </StyledLabel>
      <div id="type">
        <StyledGreenLabel htmlFor="Income">Income </StyledGreenLabel>
        <StyledRadioInput
          type="radio"
          value="income"
          id="Income"
          name="source"
          onClick={() => typeCheckerIncome()}
          onChange={() => {
            setCategory();
          }}
        />

        <StyledRedLabel htmlFor="Expense">Expense </StyledRedLabel>
        <StyledRadioInput
          type="radio"
          value="expense"
          id="Expense"
          name="source"
          onClick={() => typeCheckerExpense()}
          onChange={() => {
            setCategory();
          }}
        />
      </div>
      <StyledLabel htmlFor="category">Category: </StyledLabel>
      <StyledSelect
        id="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="" selected>
          Select one
        </option>
        {type === "Income" && <option value="Salary">Salary</option>}
        {type === "Income" && <option value="Check">Check</option>}
        {type === "Income" && <option value="Bonus">Bonus</option>}
        {type === "Expense" && <option value="Shopping">Shopping</option>}
        {type === "Expense" && <option value="Family">Family</option>}
        {type === "Expense" && <option value="Others">Others</option>}
      </StyledSelect>
      <StyledLabel htmlFor="min">Min: </StyledLabel>
      <StyledInputNumber
        type="number"
        id="min"
        onChange={(e) => {
          setMinAmount(e.target.value);
        }}
      />

      <StyledLabel htmlFor="max">Max: </StyledLabel>
      <StyledInputNumber
        type="number"
        id="max"
        onChange={(e) => {
          setMaxAmount(e.target.value);
        }}
      />

      <StyledFilterBtn onClick={() => filterSelected()}>Filter</StyledFilterBtn>
    </StyledFilterDiv>
  );
};
export default Filter;
