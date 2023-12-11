import { styled } from "styled-components";

export const StyledStatisticDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-right: 20px;
  flex: 1.15;
  height: 400px;
  border-radius: 15px;
`;

export const StyledDifferenceDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 403.5px;
  height: 120px;
  border-radius: 15px;
  background-color: #373737;
  gap: 40px;
`;

export const StyledStatsDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledColoredP = styled.p`
  color: ${(props) => (props.value === "Income" ? "rgb(102, 254, 102)" : props.value === "Expense" ? "#fa6262" : "#d1d1d1")};
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
`;

export const StyledCategoryStats = styled.div`
  font-family: "Times New Roman", Times, serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  height: 240px;
  width: 200px;
  border-radius: 15px;
  background-color: #373737;
  color: #d1d1d1;
  margin-right: 10px;
`;

export const StyledP = styled.p`
  margin-top: 5px;
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
`;

export const StyledTop3Div = styled.div`
  font-family: "Times New Roman", Times, serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  height: 240px;
  width: 195px;
  border-radius: 15px;
  background-color: #373737;
  color: #d1d1d1;
`;
