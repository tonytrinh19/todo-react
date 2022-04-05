import React, { useEffect } from "react";
import { DashBoard } from "./pages/DashBoard";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
