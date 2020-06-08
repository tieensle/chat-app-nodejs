//@ts-nocheck
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const users = require("./routers/api/users.js");

const PORT = process.env.PORT || 1337;

//built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//middleware
app.get("/", (req, res) => {
  res.send("server is running!");
  const passport = require("passport");
  console.log(passport.authenticate("local"));
});
app.use(passport.initialize());
require("./config/passport.js")(passport);
app.use("/api/users", users);

//*database
//connect
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
