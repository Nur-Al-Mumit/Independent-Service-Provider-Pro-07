import "bootstrap/dist/css/bootstrap.min.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const name = nameRef.current.value;
    createUserWithEmailAndPassword(email, password);
    emailVarification();
  };
  const emailVarification = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };
  return (
    <Form onSubmit={handleSubmit} className="mt-5 w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
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
        Already have an account?
        <span className="text-danger" onClick={navigateLogin}>
          Please LogIn
        </span>
      </p>
      <Button className="w-25 mx-auto" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
