import {
  StyledStatisticDiv,
  StyledDifferenceDiv,
  StyledStatsDiv,
  StyledColoredP,
  StyledCategoryStats,
  StyledP,
  StyledTop3Div,
} from "../styles/statsStyle";

const Stats = (props) => {
  const printParseData = props.currentExpenses;
  const sumIncome = printParseData
    .filter((expense) => expense.type === "Income")
    .reduce((sum, amount) => {
      return sum + amount.amount;
    }, 0);
  const sumExpense = printParseData
    .filter((expense) => expense.type === "Expense")
    .reduce((sum, amount) => {
      return sum + amount.amount;
    }, 0);

  function sumCategory(arr, category) {
    return arr
      .filter((x) => x.category === category)
      .reduce((sum, x) => {
        return sum + x.amount;
      }, 0);
  }

  const salary = sumCategory(printParseData, "Salary");
  const check = sumCategory(printParseData, "Check");
  const bonus = sumCategory(printParseData, "Bonus");
  const shopping = sumCategory(printParseData, "Shopping");
  const family = sumCategory(printParseData, "Family");
  const others = sumCategory(printParseData, "Others");

  const topArr = [
    { category: "Salary", sum: salary },
    { category: "Check", sum: check },
    { category: "Bonus", sum: bonus },
    { category: "Shopping", sum: shopping },
    { category: "Family", sum: family },
    { category: "Others", sum: others },
  ];
  let top1;
  let top2;
  let top3;
  const sortedTopArr = topArr.sort((a, b) => b.sum - a.sum);
  if (sortedTopArr[0].sum !== 0) {
    top1 = sortedTopArr[0].category;
  } else top1 = "";

  if (sortedTopArr[1].sum !== 0) {
    top2 = sortedTopArr[1].category;
  } else top2 = "";

  if (sortedTopArr[2].sum !== 0) {
    top3 = sortedTopArr[2].category;
  } else top3 = "";

  return (
    <StyledStatisticDiv>
      <StyledDifferenceDiv>
        <StyledStatsDiv>
          <StyledColoredP value="Income">Income:</StyledColoredP>
          <StyledColoredP value="Income"> {sumIncome}</StyledColoredP>
        </StyledStatsDiv>
        <StyledStatsDiv>
          <StyledColoredP>Difference:</StyledColoredP>
          <StyledColoredP>{sumIncome - sumExpense}</StyledColoredP>
        </StyledStatsDiv>
        <StyledStatsDiv>
          <StyledColoredP value="Expense">Expense:</StyledColoredP>
          <StyledColoredP value="Expense">{sumExpense}</StyledColoredP>
        </StyledStatsDiv>
      </StyledDifferenceDiv>
      <StyledCategoryStats>
        <h1>Stats:</h1>
        <StyledP>Salary: {salary}</StyledP>
        <StyledP>Check: {check}</StyledP>
        <StyledP>Bonus: {bonus}</StyledP>
        <StyledP>Shopping: {shopping}</StyledP>
        <StyledP>Family: {family}</StyledP>
        <StyledP>Others: {others}</StyledP>
      </StyledCategoryStats>
      <StyledTop3Div>
        <h1>Top 3:</h1>
        <StyledP>I. {top1}</StyledP>
        <StyledP>II. {top2}</StyledP>
        <StyledP>III. {top3}</StyledP>
      </StyledTop3Div>
    </StyledStatisticDiv>
  );
};

export default Stats;
