import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login.js";
import Signup from "./components/auth/Register.js";
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
};

export default App;
