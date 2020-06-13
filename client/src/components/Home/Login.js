import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import "./Auth.css";
import Header from "../layout/Header";
import { authLogin } from "../../api/auth.js";
import History from "../../utils/history.js";
import handleResponse from "../../utils/handleResponse.js";

import { currentUserValue } from "../../api/auth";

import getUser from "../../api/getUser";
import setAuthHeader from "../../utils/setAuthHeader";

const Login = (props) => {
  // console.log("here");
  const [errors, setError] = useState("");
  const { handleSubmit, register } = useForm();
  const handleError = () => {};
  const handleSubmitLogin = async (data) => {
    try {
      const res = await authLogin(data);
      if (res.success) {
        // alert("Login success!");
        History.push("/chat");
        // const { from } = History.location.state || {
        //   from: { pathname: "/chat" },
        // };
        // History.push(from);
        // console.log(localStorage.getItem("currentUser"));
        // const test = getUser();
        // console.log(test);
        window.location.reload();
      } else {
        //TODO: SHOW ERROR BETTER
        const err = Object.values(res);
        throw new Error(err);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   if (currentUserValue) {
  //     History.push("/chat");
  //   }
  // }, []);

  return (
    <div>
      <Header />
      {/* {error ? <h3 className="error">{error}</h3> : null} */}
      {errors ? <div className="h4 text-danger">{errors}</div> : null}
      <form className="login-form" onSubmit={handleSubmit(handleSubmitLogin)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="form-control"
            type="email"
            placeholder="Enter your email"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            className="form-control"
            type="password"
            placeholder="Enter your password"
            ref={register}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      <Link to="/register">
        <button className="btn btn-secondary">New Member?</button>
      </Link>
    </div>
  );
};
export default Login;
