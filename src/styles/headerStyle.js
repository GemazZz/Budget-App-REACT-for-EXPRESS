import { styled } from "styled-components";

export const StyledHeaderDiv = styled.div`
  width: 100vw;
  height: 10vh;
  background: #373737;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledAddNewTransaction = styled.button`
  position: relative;
  width: 200px;
  height: 40px;
  right: 65px;
  font-family: "Times New Roman", Times, serif;
  border: none;
  cursor: pointer;
  color: #d1d1d1;
  background-color: #764920;
  border-radius: 25px;
  transition: 0.25s;
  &:hover {
    scale: 1.1;
  }
`;

export const StyledBudgetApp = styled.p`
  position: relative;
  right: 200px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  font-weight: 500;
  font-size: 25px;
  cursor: pointer;
`;

export const StyledSignIn = styled.button`
  border: none;
  position: relative;
  left: 230px;
  cursor: pointer;
  background-color: transparent;
  transition: 0.25s;
`;

export const StyledI = styled.i`
  transition: 0.25s;
  margin-left: 20px;
  &:hover {
    scale: 1.2;
  }
`;

export const StyledEmailP = styled.p`
  position: absolute;
  left: 1020px;
  margin: 10px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  font-weight: 500;
  font-size: 25px;
`;
