var express = require('express');
var router = express.Router();
var personsController = require("../controllers/requestController");
const ENTITY = "Auth";


router.post('/', (req, res) => personsController.processRequest(req, res, ENTITY, "LOGIN"));


module.exports = router;
