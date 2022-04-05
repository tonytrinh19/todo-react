import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../actions/auth";
const PublicRoute = ({ children, isAuth, auth, loading }) => {
  useEffect(() => {
    isAuth();
  }, [auth]);

  if (loading) return <div>Loading....</div>;
  return auth ? <Navigate to="/home" /> : children;
};

PublicRoute.propTypes = {
  isAuth: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth, loading: state.loading };
};

export default connect(mapStateToProps, { isAuth })(PublicRoute);
