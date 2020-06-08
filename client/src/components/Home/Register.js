import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import { Form, Button } from "react-bootstrap";
import Header from "../layout/Header";
const Register = (props) => {
  const { handleSubmit, register } = useForm();
  const onSubmitRegister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Header />
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
