import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import { Form, Button } from "react-bootstrap";
import Header from "../layout/Header";
import { authRegister } from "../../api/auth";

import History from "../../utils/history.js";
const Register = (props) => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmitRegister = async (data) => {
    try {
      const res = await authRegister(data);
      if (res.success) {
        console.log(res.token);
        alert("Register success!");
        History.push("/login");
        window.location.reload();
      } else {
        console.log(res);
        const errors = Object.values(res);
        throw new Error(errors);
        // const error = res.name || res.email || res.password || res.password2;
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <Header />
      {error ? <div className="h3 text-danger">{error}</div> : null}
      <form className="register-form" onSubmit={handleSubmit(onSubmitRegister)}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Enter your username"
            ref={register}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            name="password2"
            className="form-control"
            type="password"
            placeholder="Enter confirm password"
            ref={register}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
      <Link to="/login">
        <button className="btn btn-secondary">Already Member?</button>
      </Link>
    </div>
  );
};
export default Register;
