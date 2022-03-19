import React from "react";
import { DashBoard } from "./pages/DashBoard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<DashBoard />}></Route>
      </Routes>
    </Router>
  );
};
