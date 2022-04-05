import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/login.css";
import { Navigate, Outlet } from "react-router-dom";

export const LoginPage = () => {
  // WIll forward to home when logged in
  // change when there's useAuth
  return <Outlet />;
};
