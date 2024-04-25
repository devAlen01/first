import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/routes/mainRoutes";
import StudentContext from "./components/context/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StudentContext>
      <App />
      <div className="container">
        <MainRoutes />
      </div>
    </StudentContext>
  </BrowserRouter>
);
