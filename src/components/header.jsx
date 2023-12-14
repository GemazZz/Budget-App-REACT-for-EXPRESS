import { useEffect, useState } from "react";
import { StyledHeaderDiv, StyledAddNewTransaction, StyledBudgetApp, StyledSignIn, StyledI, StyledEmailP } from "../styles/headerStyle";
import { useNavigate } from "react-router-dom";

const URL = "https://clownfish-app-7yexe.ondigitalocean.app/api/v1/user";
const URLDEL = "https://clownfish-app-7yexe.ondigitalocean.app/api/v1/deactivation";

const Header = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.parse(sessionStorage.getItem("accessToken")),
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const currentUser = JSON.parse(sessionStorage.getItem("accessToken"));
  const logOut = () => {
    if (!currentUser) {
      return;
    } else {
      sessionStorage.removeItem("accessToken");
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
  const deactivationFunc = async () => {
    const fetchData = async () => {
      try {
        const res = await fetch(URLDEL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: JSON.parse(sessionStorage.getItem("accessToken")),
          },
        });
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
        await res.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    await fetchData();
    navigate("/signin");
  };
  return (
    <StyledHeaderDiv>
      {currentUser && userData && <StyledEmailP>{userData.foundUser.username}</StyledEmailP>}
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
          className="fa-solid fa-arrows-rotate fa-2xl"
          style={{ color: "#b4d300" }}
          onClick={() => {
            if (!sessionStorage.getItem("accessToken")) {
              alert("You are not signed in!");
              return;
            }
            navigate("/changepassword");
          }}
        />
        <StyledI
          className="fa-solid fa-user-minus fa-2xl"
          style={{ color: "#360000" }}
          onClick={async () => {
            if (!sessionStorage.getItem("accessToken")) {
              alert("You are not signed in!");
              return;
            }
            await deactivationFunc();
          }}
        />
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
