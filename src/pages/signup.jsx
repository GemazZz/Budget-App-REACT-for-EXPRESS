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
  StyledLinkSpan,
} from "../styles/signStyle";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userData = {
    userId: new Date().getTime(),
    name,
    username,
    email,
    password,
  };
  const uploadUser = () => {
    const usersData = JSON.parse(localStorage.getItem("users"));

    if (!email || !password) {
      alert("Please fill the form completely");
      return;
    }
    if (!email.includes("@")) {
      alert("Email is NOT valid. (does NOT contain '@')");
      return;
    }
    if (email.length < 6) {
      alert("Email is NOT valid. (Too short)");
      return;
    }
    if (email.length > 30) {
      alert("Email is NOT valid. (Too Long)");
      return;
    }
    if (password.length < 6) {
      alert("Password is NOT valid. (Use at least 6 character)");
      return;
    }
    if (password.length > 20) {
      alert("Password is NOT valid. (Use no more than 20 character)");
      return;
    }
    const existData = localStorage.getItem("users");
    const parseExistData = JSON.parse(existData);
    const fullData = [userData, ...parseExistData];
    localStorage.setItem("users", JSON.stringify(fullData));
    navigate("/signin");
  };
  return (
    <StyledDiv style={{ height: "400px" }}>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Create an account</StyledTransactionH1>
      <div>
        <StyledDateLabel htmlFor="Name">Name: </StyledDateLabel>
        <StyledDateInput
          type="text"
          id="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div style={{ position: "relative", left: "-15px" }}>
        <StyledDateLabel htmlFor="Username">Username: </StyledDateLabel>
        <StyledDateInput
          type="text"
          id="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
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
      <div style={{ position: "relative", left: "-1px" }}>
        <StyledAmountLabel htmlFor="amount">Password: </StyledAmountLabel>
        <StyledNumberInput
          type="password"
          id="amount"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <StyledSubmitBtn
        className="submit"
        onClick={() => {
          uploadUser();
        }}
      >
        Create
      </StyledSubmitBtn>
      <StyledNew>
        Already have an account?
        <Link to={"/signin"} style={{ textDecorationLine: "#d1d1d1", color: "#764920", marginLeft: "4px" }}>
          <StyledLinkSpan>Log in Here</StyledLinkSpan>
        </Link>
      </StyledNew>
    </StyledDiv>
  );
};

export default SignUp;
