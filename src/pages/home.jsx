import Header from "../components/header";
import Filter from "../components/filter";
import PrintData from "../components/printData";
import { styled } from "styled-components";
import { useState } from "react";
import Stats from "../components/stats";

const StyledMainDiv = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  gap: 20px;
  height: min(90vh);
`;

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}
if (!localStorage.getItem("expenses")) {
  localStorage.setItem("expenses", JSON.stringify([]));
}

function filtering(array, filters) {
  return array.filter((item) => {
    if (filters.minAmount && item.amount < filters.minAmount) {
      return false;
    }
    if (filters.maxAmount && item.amount > filters.maxAmount) {
      return false;
    }
    if (filters.type && item.type !== filters.type) {
      return false;
    }
    if (filters.category && item.category !== filters.category) {
      return false;
    }
    if (filters.date && item.date !== filters.date) {
      return false;
    }
    return true;
  });
}

const Home = () => {
  const parseData = JSON.parse(localStorage.getItem("expenses"));
  const currentUserId = JSON.parse(localStorage.getItem("id"));
  const [printParseData, setPrintParseData] = useState(parseData.filter((user) => user.userId === currentUserId));
  const [currentExpenses, setCurrentExpenses] = useState(printParseData);

  const onFiltersSelect = (filters) => {
    console.log(filters);
    const filteredExpenses = filtering(printParseData, filters);
    setCurrentExpenses(filteredExpenses);
  };
  const dltExpense = (id) => {
    const updatedData = printParseData.filter((exp) => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(updatedData));
    const updatedPrintData = currentExpenses.filter((exp) => exp.id !== id);
    setPrintParseData(updatedData);
    setCurrentExpenses(updatedPrintData);
  };
  return (
    <>
      <Header />
      <StyledMainDiv>
        <Filter onFiltersSelect={onFiltersSelect} />
        <PrintData currentExpenses={currentExpenses} dltExpense={dltExpense} />
        <Stats currentExpenses={currentExpenses} />
      </StyledMainDiv>
    </>
  );
};

export default Home;
