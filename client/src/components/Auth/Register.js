import React, { useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
const Signup = () => {
  return (
    <div className="join-area">
      <form className="signUp-form form">
        <label htmlFor="name">Username</label>
        <input itemType="text" name="name" className="name input"></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="password input"
        ></input>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="confirmPassword input"
        ></input>
        <label htmlFor="email">Email</label>
        <input itemType="email" name="email" className="email input"></input>
        <Link to="/chat">
          <button itemType="submit" className="btn btn-primary signUp-btn">
            Sign Up
          </button>
        </Link>
        <Link to="/">
          <button
            itemType="submit"
            className="btn btn-primary alreadyMember-btn"
          >
            Already a member?
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Signup;
