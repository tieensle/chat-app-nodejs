import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import "./Auth.css";
import Header from "../layout/Header";
import { authLogin } from "../../api/auth.js";

const Login = (props) => {
  const { handleSubmit, register } = useForm();
  const onSubmitLogin = async (data) => {
    const token = await authLogin(data);
  };
  return (
    <div>
      <Header />
      <form className="login-form" onSubmit={handleSubmit(onSubmitLogin)}>
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
