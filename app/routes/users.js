var express = require('express');
var router = express.Router();
var sendToQueue = require("../rabbitmq/rabbitmq");

/* GET users listing. */
router.get('/', function(req, res, next) {
  sendToQueue("hello", "Hello World!");
  res.send('respond with a resource hello world');
});

module.exports = router;
