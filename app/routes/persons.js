var express = require('express');
var router = express.Router();
var sendToQueue = require("../rabbitmq/rabbitmq");
var personsController = require("../controllers/personsController");

/* GET users listing. */
router.get('/:id', personsController.processRequest);

router.post('/', personsController.processRequest);


module.exports = router;
