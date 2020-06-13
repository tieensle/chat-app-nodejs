import React, { Component } from "react";
import User from "./User";
import getUser from "../../api/getUser.js";

const Chat = () => {
  const user = getUser();
  console.log(typeof user);
  return (
    <div>
      {/* {user} */}
      <form className="chat-form" action="">
        <input type="text" />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
