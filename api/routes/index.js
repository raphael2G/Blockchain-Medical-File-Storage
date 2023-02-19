var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/regist", function (req, res, next) {
  res.send("This is to register a new user");
});

router.get("/login", function (req, res, next) {
  res.send("this is to login a user");
});

router.get("send", function (req, res, next) {
  res.send("this is to send a file");
});

module.exports = router;
