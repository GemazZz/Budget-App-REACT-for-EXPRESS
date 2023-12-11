import { styled } from "styled-components";

export const StyledFilterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  color: #222222;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #373737;
  flex: 1;
  height: 450px;
  border-radius: 15px;
`;

export const StyledLabel = styled.label`
  color: #d1d1d1;
`;

export const StyledGreenLabel = styled.label`
  color: #66fe66;
`;

export const StyledRedLabel = styled.label`
  color: #fa6262;
`;

export const StyledInput = styled.input`
  width: 150px;
  margin-top: 7px;
  margin-bottom: 7px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledInputNumber = styled.input`
  width: 150px;
  margin-top: 7px;
  margin-bottom: 7px;
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

export const StyledSelect = styled.select`
  width: 150px;
  margin-top: 7px;
  margin-bottom: 7px;
  border: none;
  border-radius: 5px;
  background-color: #373737;
  height: 30px;
  outline: 1px solid #bdbdbd;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
`;

export const StyledRadioInput = styled.input`
  margin-top: 15px;
  border: none;
  margin-bottom: 15px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #373737;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Times New Roman", Times, serif;
  color: #d1d1d1;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledFilterBtn = styled.button`
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
