var express = require('express');
var router = express.Router();
var personsController = require("../controllers/requestController");
const ENTITY = "Person";

/* GET users listing. */
router.get('/:id', (req, res) => personsController.processRequest(req, res, ENTITY));

router.post('/', (req, res) => personsController.processRequest(req, res, ENTITY));


module.exports = router;
