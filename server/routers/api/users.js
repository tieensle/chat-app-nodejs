//@ts-nocheck

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

require("dotenv").config();

const validateRegisterInput = require("../../validation/register.js");
const validateLoginInput = require("../../validation/login.js");

const User = require("../../models/Users.js");

const verify = require("../../utils/verify-token");

router.get("/", (req, res) => {
  console.log("verify here");
  console.log(req.headers.authorization);
  //TODO: VERIFY HERE
  try {
    const jwtUser = jwt.verify(verify(req), process.env.secretOrKey);
    console.log(jwtUser);
    return res.json(jwtUser);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(404).json(errors);
  }
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
      });

      // generate salt and hash on separate function call
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(() => {
              // (user) => res.json(user);
              //TODO: send to client
              const payload = {
                id: newUser.id,
                name: newUser.name,
              };
              jwt.sign(
                payload,
                process.env.secretOrKey,
                {
                  expiresIn: 31556926,
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
// Pull the errors and isValid variables from our validateLoginInput(req.body) function and check input validation
// If valid input, use MongoDB’s User.findOne() to see if the user exists
// If user exists, use bcryptjs to compare submitted password with hashed password in our database
// If passwords match, create our JWT Payload
// Sign our jwt, including our payload, keys.secretOrKey from keys.js, and setting a expiresIn time (in seconds)
// If successful, append the token to a Bearer string (remember in our passport.js file, we setopts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();)

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(404).json(errors);
  }
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ emailNotFound: `User hasn't existed` });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          process.env.secretOrKey,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({
          passwordincorrect: "Password Incorrect",
        });
      }
    });
  });
});

module.exports = router;
