import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const LogIn = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  if(user) {
    navigate(from, { replace: true });
  }
  const navigateRegister = event => {
    navigate('/register')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <Form onSubmit={handleSubmit} className="mt-5 w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <p>
        Frist time in Fitmax?{" "}
        <span className="text-danger" onClick={navigateRegister}>Please Register</span>
      </p>
      <Button className="w-25 mx-auto" variant="primary" type="submit">
        LogIn
      </Button>

    </Form>
  );
};

export default LogIn;
