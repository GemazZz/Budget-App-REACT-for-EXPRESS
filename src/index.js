import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Transaction from "./pages/transaction";
import EditTransaction from "./pages/editTransaction";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChangePassword from "./pages/changePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addtransaction",
    element: <Transaction />,
  },
  {
    path: "/edittransaction/:id",
    element: <EditTransaction />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
