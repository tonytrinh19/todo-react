import React, { useEffect } from "react";
import { DashBoard } from "./pages/DashBoard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { LoginPage } from "./pages/LoginPage";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./components/test";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
