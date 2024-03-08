import React from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButton";

import { setRoute } from "../../redux/stateSlices/routeSlice";
const LogIn = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setRoute("Register"));
  };
  return (
    <>
      <h2>Log In</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="mb-3" muted style={{ display: "block" }}>
          If you don't have an account yet,{" "}
          <CustomButton value="register" variant="link" onClick={handleClick} />
          .
        </Form.Text>
        <CustomButton value="Log In" variant="success" />
      </Form>
    </>
  );
};

export default LogIn;
