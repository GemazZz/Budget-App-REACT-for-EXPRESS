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
} from "../styles/signStyle";
import { Link, useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const newPassSet = () => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    const emailValid = usersData.filter((user) => {
      return user.email === email;
    });
    const notUpdatePassword = usersData.filter((user) => {
      return user.email !== email;
    });
    const userData = {
      userId: emailValid[0].userId,
      email,
      password,
    };
    if (!emailValid) {
      alert("User with this email does not exist");
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
    const newData = [...notUpdatePassword, userData];
    localStorage.setItem("users", JSON.stringify(newData));
    alert("Password changed successfully");
    navigate("/signin");
  };
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Password Recovery</StyledTransactionH1>
      <div style={{ position: "relative", left: "14.5px" }}>
        <StyledDateLabel htmlFor="Email">Email: </StyledDateLabel>
        <StyledDateInput
          type="email"
          id="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div style={{ position: "relative", left: "-5px" }}>
        <StyledAmountLabel htmlFor="amount">New Password: </StyledAmountLabel>
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
          newPassSet();
        }}
      >
        Update
      </StyledSubmitBtn>
    </StyledDiv>
  );
};

export default ForgetPass;
