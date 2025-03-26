var express = require('express');
var router = express.Router();
var personsController = require("../controllers/requestController");
const ENTITY = "Person";

/* GET users listing. */
router.get('/:id', (req, res) => personsController.processRequest(req, res, ENTITY, "GETBYID"));

router.post('/', (req, res) => personsController.processRequest(req, res, ENTITY, "CREATE"));


module.exports = router;
