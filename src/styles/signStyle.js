import { styled } from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  color: #222222;
  margin-top: 170px;
  margin-left: 20px;
  background-color: #373737;
  height: 350px;
  width: 430px;
  border-radius: 15px;
`;

export const StyledCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: 0.2s;
  &:hover {
    scale: 1.2;
  }
`;

export const StyledTransactionH1 = styled.h1`
  position: relative;
  bottom: 20px;
  color: #d1d1d1;
`;

export const StyledAmountLabel = styled.label`
  position: relative;
  left: 5px;
  color: #d1d1d1;
`;
export const StyledDateLabel = styled.label`
  position: relative;
  left: 17px;
  color: #d1d1d1;
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledDateInput = styled.input`
  position: relative;
  left: 17px;
  width: 180px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledNumberInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  left: 5px;
  width: 180px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 7px;
  font-family: "Times New Roman", Times, serif;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.25s;
  outline: 1px solid #bdbdbd;
  color: #d1d1d1;
  background-color: #764920;
  &:hover {
    scale: 1.1;
  }
`;

export const StyledForget = styled.div`
  position: relative;
  color: #764920;
  margin-top: 1px;
  font-size: 16px;
  margin-bottom: 10px;
  left: 40px;
  text-decoration-line: #764920;
  transition: 0.25s;
  &:hover {
    color: #d1d1d1;
    scale: 1.05;
  }
`;
export const StyledNew = styled.div`
  color: #d1d1d1;
  margin-top: 10px;
  text-decoration: #d1d1d1;
`;

export const StyledLinkSpan = styled.span`
  transition: 0.2s;
  &:hover {
    color: #d1d1d1;
  }
`;
