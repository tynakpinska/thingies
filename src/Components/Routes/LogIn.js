import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButton";

import { setRoute } from "../../redux/stateSlices/routeSlice";
import { useLogInQuery } from "../../redux/shopApi";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("btn-link")) dispatch(setRoute("Register"));
    else if (e.target.classList.contains("btn-success"))
      console.log(email, password);
  };

  const handleInputChange = (e) => {
    if (e.target.type === "email") setEmail(e.target.value);
    else if (e.target.type === "password") setPassword(e.target.value);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center">
        Log In
      </h2>
      <Form className="col-11 col-sm-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Text className="mb-3" muted style={{ display: "block" }}>
          If you don't have an account yet,{" "}
          <CustomButton value="register" variant="link" onClick={handleClick} />
          .
        </Form.Text>
        <CustomButton value="Log In" variant="success" onClick={handleClick} />
      </Form>
    </>
  );
};

export default LogIn;
