var express = require('express');
var router = express.Router();
var sendToQueue = require("../rabbitmq/rabbitmq");
const ENTITY = "Person";

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  let msg = {
    entity: ENTITY,
    action: "GET",
    data: { id: req.params.id },
    metadata: {}
  };
  sendToQueue(msg, function (response) {
    res.send(response);
  });
});

router.post('/', function (req, res, next) {
  let msg = {
    entity: ENTITY,
    action: "POST",
    data: req.body,
    metadata: {}
  }
  sendToQueue(msg, function (response) {
    res.send(response);
  });
}
);

module.exports = router;
