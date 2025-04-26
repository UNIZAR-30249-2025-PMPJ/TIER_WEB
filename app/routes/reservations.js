var express = require('express');
var router = express.Router();
var reservationController = require("../controllers/requestController");
const ENTITY = "Reservation";


router.get('/', (req, res) => reservationController.processRequest(req, res, ENTITY, "GET"));

router.post('/', (req, res) => reservationController.processRequest(req, res, ENTITY, "POST"));

router.put("/:id", (req, res) => reservationController.processRequest(req, res, ENTITY, "PUT"));

router.delete("/:id", (req, res) => reservationController.processRequest(req, res, ENTITY, "DELETE"));

module.exports = router;
