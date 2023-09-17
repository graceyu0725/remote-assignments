const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "pug");

const router = require("./routes");
app.use(router);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
