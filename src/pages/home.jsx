import Header from "../components/header";
import Filter from "../components/filter";
import PrintData from "../components/printData";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
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

const URL = "http://localhost:3000/api/v1/expenses";
const URLDEL = "http://localhost:3000/api/v1/delexpense";

const Home = () => {
  const [printParseData, setPrintParseData] = useState([]);
  const [currentExpenses, setCurrentExpenses] = useState(printParseData);
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
      setPrintParseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (printParseData) {
      setCurrentExpenses(printParseData);
    }
  }, [printParseData]);

  const onFiltersSelect = (filters) => {
    const filteredExpenses = filtering(printParseData, filters);
    setCurrentExpenses(filteredExpenses);
  };
  const dltExpense = async (id) => {
    console.log(id);
    const fetchData = async () => {
      try {
        const res = await fetch(URLDEL, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(sessionStorage.getItem("accessToken")),
          },
          body: JSON.stringify({ expenseId: id }),
        });
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    await fetchData();
    const updatedData = printParseData.filter((exp) => exp._id !== id);
    setPrintParseData(updatedData);
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
