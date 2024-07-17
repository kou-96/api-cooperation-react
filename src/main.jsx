import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignupForm from "./components/SignupForm.jsx";
import LoginSuccess from "./components/LoginSuccess.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<LoginSuccess />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
