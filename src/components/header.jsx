import { StyledHeaderDiv, StyledAddNewTransaction, StyledBudgetApp, StyledSignIn, StyledI, StyledEmailP } from "../styles/headerStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("id"));
  const parseExistData = JSON.parse(localStorage.getItem("users"));
  const userData = parseExistData.filter((user) => user.userId === currentUser);
  const logOut = () => {
    if (!currentUser) {
      return;
    } else {
      localStorage.removeItem("id");
      navigate("/signin");
    }
  };
  const logInCheck = () => {
    if (!currentUser) {
      alert("Log in First");
      navigate("/signin");
      return;
    } else {
      navigate("/addtransaction");
    }
  };
  const signInFunc = () => {
    if (currentUser) {
      alert("You are ALREADY signed in");
      return;
    } else {
      navigate("/signin");
    }
  };
  return (
    <StyledHeaderDiv>
      {currentUser && <StyledEmailP>{userData[0].email}</StyledEmailP>}
      <StyledBudgetApp
        onClick={() => {
          window.location.reload();
        }}
      >
        <i className="fa-solid fa-chart-pie" style={{ color: "#764920" }}></i> Budget App
      </StyledBudgetApp>
      <StyledAddNewTransaction onClick={() => logInCheck()}>Add New Transaction</StyledAddNewTransaction>
      <StyledSignIn>
        <StyledI
          className="fa-solid fa-user fa-2xl"
          style={{ color: "#764920" }}
          onClick={() => {
            signInFunc();
          }}
        />
        <StyledI
          className="fa-solid fa-arrow-right-from-bracket fa-2xl"
          style={{ color: "#bc1f1f" }}
          onClick={() => {
            logOut();
          }}
        />
      </StyledSignIn>
    </StyledHeaderDiv>
  );
};
export default Header;
