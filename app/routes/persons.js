var express = require('express');
var router = express.Router();
var sendToQueue = require("../rabbitmq/rabbitmq");
const ENTITY = "Person";

/* GET users listing. */
router.get('/', function (req, res, next) {
  let msg = {
    entity: ENTITY,
    action: "GET",
    data: { id: "1" },
    metadata: {}
  }
  sendToQueue(msg, function (response) {
    res.send(response);
  });
  // res.send('respond with a resource hello world');
});

module.exports = router;
