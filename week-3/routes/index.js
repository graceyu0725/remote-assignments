const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

router.get("/getData", (req, res) => {
  const number = req.query.number;
  let result = {message: "message"};
  if (number > 0 && !isNaN(number)) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      sum += i;
    }
    result.message = `${sum}`;
  } else if (number) {
    result.message = "Wrong Parameter";
  } else {
    result.message = "Lack of Parameter";
  }
  res.send(result);
});

// router.get("/sum.html", (req, res) => {
//   const fileName = path.resolve(__dirname, "../public/sum.html");
//   res.sendFile(fileName);
// });

module.exports = router;
