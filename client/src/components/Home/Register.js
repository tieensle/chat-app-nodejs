import React, { useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { Form, Button } from "react-bootstrap";
import Header from "../layout/Header";
const Register = (props) => {
  return (
    <div>
      <Header />
      <Form>
        <Form.Group>
          <Form.Label>*Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group>
          <Form.Label>*Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>*Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>*Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
      <Link to="/login">
        <Button variant="secondary">Back To Login</Button>
      </Link>
    </div>
  );
};
export default Register;
