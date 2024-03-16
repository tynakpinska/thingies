import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButton";
import { setRoute } from "../../redux/stateSlices/routeSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reapetedPassword, setReapetedPassword] = useState("");

  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(setRoute("LogIn"));
  };

  const handleInputChange = (e) => {
    if (e.target.id === "username") setUsername(e.target.value);
    else if (e.target.id === "email") setEmail(e.target.value);
    else if (e.target.id === "password") setPassword(e.target.value);
    else setReapetedPassword(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(username, email, password, reapetedPassword);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center">
        Register
      </h2>
      <Form className="col-11 col-sm-4">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="reapetedPassword">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Text className="mb-3" muted style={{ display: "block" }}>
          Already have an account?{" "}
          <CustomButton
            value="Log in."
            variant="link"
            onClick={handleLinkClick}
          />
          .
        </Form.Text>
        <CustomButton
          value="Register"
          variant="success"
          onClick={handleButtonClick}
        />
      </Form>
    </>
  );
};

export default Register;
