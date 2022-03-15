import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/DashBoard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
