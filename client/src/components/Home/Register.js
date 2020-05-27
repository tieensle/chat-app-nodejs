import React, { useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { Form, Button } from "react-bootstrap";
const Register = (props) => {
  return (
    <div>
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
      <Button variant="secondary" onClick={() => props.changeView("register")}>
        Back To Login
      </Button>
    </div>
  );
};
export default Register;
