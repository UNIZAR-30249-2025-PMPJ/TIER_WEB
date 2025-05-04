var express = require('express');
var router = express.Router();
var buildingController = require("../controllers/requestController");
const ENTITY = "Building";


router.get('/', (req, res) => buildingController.processRequest(req, res, ENTITY, "GET"));

router.put("/:id", (req, res) => buildingController.processRequest(req, res, ENTITY, "PUT"));


module.exports = router;
