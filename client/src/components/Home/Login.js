import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import "./Auth.css";
import Header from "../layout/Header";
import { authLogin } from "../../api/auth.js";

const Login = (props) => {
  const [errors, setError] = useState("");
  const history = useHistory();
  const { handleSubmit, register } = useForm();
  const handleError = () => {};
  const handleSubmitLogin = async (data, event) => {
    try {
      const res = await authLogin(data);
      if (res.success) {
        console.log(localStorage.getItem("currentUser"));
        //TODO: HANDLE REDIRECT TO CHAT SCREEN
      } else {
        const err = Object.values(res);
        console.log(err);
        throw new Error(err);
      }
    } catch (error) {
      console.log(typeof error.message);
      setError(error.message);
    }
  };
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
