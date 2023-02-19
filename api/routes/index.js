var express = require("express");
const { userInfo } = require("os");
const { stringify } = require("querystring");
var router = express.Router();

var playground = require('./blockchain/playground');
let keyPair;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createUser", function (req, res, next) {
  keyPair = playground.createUser()
  const public = keyPair.getPublic('hex');
  res.send(public);

});

router.get("/viewReport/:publicKey", function (req, res, next) {
  const publicKey = req.params['publicKey'];
  report = playground.viewReport(publicKey);
  res.send(report);
});

router.get("/createTransaction/:from/:to/:entry", function (req, res, next) {
  const from = req.params['from'];
  const to = req.params['to'];
  const entry = req.params['entry'];

  playground.createTransaction(keyPair, to, entry);
  res.send('transaction complete');
});


module.exports = router;
