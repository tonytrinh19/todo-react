import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../actions/auth";
const PrivateRoute = ({ children, isAuth, auth }) => {
  useEffect(() => {
    isAuth();
  }, []);
  return auth ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { isAuth })(PrivateRoute);
