import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignupForm from "./components/SignupForm.jsx";
import LoginSuccess from "./components/LoginSuccess.jsx";
import SignupSuccess from "./components/SignUpsuccess.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
