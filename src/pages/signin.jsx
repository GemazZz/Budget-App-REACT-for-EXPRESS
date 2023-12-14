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
import { StyledLabel } from "../styles/filterStyle";

const URL = "http://localhost:3000/api/v1/signin";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const userData = { email, password };
  const navigate = useNavigate();

  const checkUser = async () => {
    if (!email || !password) {
      alert("Please fill out the form completely");
      return;
    }
    const tokenSave = async () => {
      try {
        const res = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await res.json();
        return json;
      } catch (err) {
        navigate("/signin");
        console.log(err);
        return "err";
      }
    };
    const accessToken = await tokenSave();
    console.log(accessToken);
    if (accessToken !== "err") {
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken.token));
      navigate("/signup");
    }
    setErr(true);
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
      {err && <StyledLabel style={{ color: "red" }}>Wrong credentials</StyledLabel>}
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
