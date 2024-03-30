import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";
import CustomButton from "../CustomButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reapetedPassword, setReapetedPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [warning, setWarning] = useState("");
  const [status, setStatus] = useState("");

  const registerUser = async (username, email, password) => {
    try {
      setStatus("loading");
      let response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
          avatar: avatarUrl,
        }),
      });
      const result = await response.json();
      if (result) {
        setStatus("success");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === "username") setUsername(e.target.value);
    else if (e.target.id === "email") setEmail(e.target.value);
    else if (e.target.id === "password") setPassword(e.target.value);
    else if (e.target.id === "avatarUrl") setAvatarUrl(e.target.value);
    else setReapetedPassword(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (password !== reapetedPassword) setWarning("Passwords do not match.");
    else if (password.length < 4)
      setWarning("Password must be longer than or equal to 4 characters.");
    else registerUser(username, email, password, avatarUrl);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center">
        Register
      </h2>
      {status === "loading" ? (
        <Spinner />
      ) : status === "success" ? (
        <p style={{ color: "#198754" }}>Account created. You may log in now.</p>
      ) : status === "error" ? (
        <p style={{ color: "#dc3545" }}>
          Ups. Something went wrong. Please try again.
        </p>
      ) : (
        <Form className="col-11 col-sm-4">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="reapetedPassword">
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="avatarUrl">
            <Form.Label>Avatar URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Avatar URL"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Text className="mb-3" muted style={{ display: "block" }}>
            Already have an account?{" "}
            <Link to="/login">
              <CustomButton value="Log in." variant="link" required />
            </Link>
            .
          </Form.Text>
          <p style={{ color: "#dc3545" }}>{warning}</p>
          <CustomButton
            value="Register"
            variant="success"
            onClick={handleButtonClick}
          />
        </Form>
      )}
    </>
  );
};

export default Register;
