import React, { Component } from "react";
import getUser from "../../api/getUser.js";

const User = () => {
  return (
    <div>
      <p className="h2 text-success">{getUser()}</p>
    </div>
  );
};

export default User;
