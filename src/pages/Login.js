import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    setRegister(!register);
    event.preventDefault();
  }

  return (
    <>
      <Button onClick={handleSubmit} variant="primary">
        Register
      </Button>
      {register ? (
        <Form className={"Login"}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <div> yo</div>
      )}
    </>
  );
};
