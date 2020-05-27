import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import "./Auth.css";

const Login = (props) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>*Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>*Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
      {/* <Link to="/register"> */}
      <Button variant="secondary" onClick={() => props.changeView("register")}>
        New Member?
      </Button>
      {/* </Link> */}
    </div>
  );
};
export default Login;
