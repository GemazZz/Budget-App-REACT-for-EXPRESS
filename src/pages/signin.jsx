import { useState } from "react";
import {
  StyledDiv,
  StyledCloseBtn,
  StyledTransactionH1,
  StyledDateLabel,
  StyledSubmitBtn,
  StyledAmountLabel,
  StyledDateInput,
  StyledNumberInput,
  StyledNew,
  StyledForget,
  StyledLinkSpan,
} from "../styles/signStyle";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const checkUser = () => {
    if (!email || !password) {
      alert("Please fill out the form completely");
      return;
    }
    const parseExistData = JSON.parse(localStorage.getItem("users"));
    const findEmail = parseExistData.filter((user) => user.email === email);
    const findUser = parseExistData.filter((user) => user.email === email && user.password === password);

    if (findEmail.length !== 0 && findUser.length === 0) {
      alert("Password is Incorrect");
      return;
    }
    if (findUser.length === 0) {
      alert("User not found");
      return;
    }
    localStorage.setItem("id", JSON.stringify(findUser[0].userId));
    navigate("/");
  };
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Sign in</StyledTransactionH1>
      <div>
        <StyledDateLabel htmlFor="Email">Email: </StyledDateLabel>
        <StyledDateInput
          type="email"
          id="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <StyledAmountLabel htmlFor="amount">Password: </StyledAmountLabel>
        <StyledNumberInput
          type="password"
          id="amount"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Link to={"/forgetpassword"} style={{ textDecorationLine: "none" }}>
        <StyledForget>Forget Password?</StyledForget>
      </Link>
      <StyledSubmitBtn
        className="submit"
        onClick={() => {
          checkUser();
        }}
      >
        Sign in
      </StyledSubmitBtn>
      <StyledNew>
        Don't have an account?
        <Link to={"/signup"} style={{ textDecorationLine: "#d1d1d1", color: "#764920", marginLeft: "4px" }}>
          <StyledLinkSpan>Register Here</StyledLinkSpan>
        </Link>
      </StyledNew>
    </StyledDiv>
  );
};

export default SignIn;
