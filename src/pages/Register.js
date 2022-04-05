import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../actions/users";

export const Register = ({ auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) return navigate("/home");
  }, [auth]);

  return (
    <Form className={"Login"}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

Register.propTypes = {
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { register })(Register);
