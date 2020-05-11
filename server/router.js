const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "tien",
    age: 20,
  });
});

module.exports = router;
