import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Home/Login.js";
import Register from "./components/Home/Register.js";
import Home from "./components/Home/Home.js";
import Chat from "./components/Chat.js";
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
