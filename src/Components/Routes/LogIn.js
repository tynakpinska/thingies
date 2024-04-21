import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButton";

import { setUser } from "../../redux/stateSlices/userSlice";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchRefreshedToken = async (refreshToken) => {
    try {
      let response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/refreshToken",
        {
          method: "post",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken,
          }),
        }
      );
      const result = await response.json();
      localStorage.setItem("accessToken", result.access_token);
      localStorage.setItem("refreshToken", result.refresh_token);
      fetchUser(localStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewToken = async (email, password) => {
    try {
      let response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      localStorage.setItem("accessToken", result.access_token);
      localStorage.setItem("refreshToken", result.refresh_token);
      fetchUser(localStorage.getItem("accessToken"));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = useCallback(
    async (token) => {
      try {
        let response = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            method: "get",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        if (result) {
          dispatch(setUser(result));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, navigate]
  );

  const handleClick = () => {
    fetchNewToken(email, password);
  };

  const handleInputChange = (e) => {
    if (e.target.type === "email") setEmail(e.target.value);
    else if (e.target.type === "password") setPassword(e.target.value);
  };

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      fetchUser(token);
    } else if (refreshToken) {
      fetchRefreshedToken(refreshToken);
    }
  });

  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center mt-2">
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
          <Link to="/register">
            <CustomButton
              value="register"
              variant="link"
              onClick={handleClick}
            />
          </Link>
          .
        </Form.Text>
        <CustomButton value="Log In" variant="success" onClick={handleClick} />
      </Form>
    </>
  );
};

export default LogIn;
