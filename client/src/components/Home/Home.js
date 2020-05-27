import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import Header from "../layout/Header.js";
import Register from "./Register.js";
import { Button } from "react-bootstrap";
function Home(props) {
  let View;
  const [page, setPage] = useState("login");

  const getView = (view) => {
    if (view === "login") {
      setPage("login");
    } else if (view === "register") {
      setPage("register");
    }
  };
  const handleChangeView = () => {
    if (page === "login") {
      View = <Login changeView={getView} />;
    } else if (page === "register") {
      View = <Register changeView={getView} />;
    }
  };
  useEffect(() => {
    handleChangeView();
  }, []);
  return (
    <React.Fragment>
      <Header />
      {View}
    </React.Fragment>
  );
}

export default Home;
