import React from "react";
import { Link } from "react-router-dom";

import "../Auth/Auth.css";

const Login = () => {
  return (
    <div className="join-area">
      <form className="logIn-form form">
        <label htmlFor="name">Username</label>
        <input itemType="text" name="name" className="name input"></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="password input"
        ></input>
        <Link to="/chat">
          <button itemType="submit" className="btn btn-primary logIn-btn">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button itemType="submit" className="btn btn-primary newMember-btn">
            New a member?
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Login;
