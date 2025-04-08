var express = require('express');
var router = express.Router();
var spaceController = require("../controllers/requestController");
const ENTITY = "Space";


/**
 * @swagger
 * /spaces:
 *   get:
 *     tags:
 *      - Space
 *     summary: Retrieve spaces
 *     description: Use this endpoint to retrieve spaces.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: false
 *         description: ID of the space to retrieve
 *         schema:
 *           type: string
 *       - in: query
 *         name: maxOccupants
 *         required: false
 *         description: Maximum occupants of the space to retrieve
 *         schema:
 *           type: integer
 *       - in: query
 *         name: reservabilityCategory
 *         required: false
 *         description: Reservability category of the space to retrieve
 *         schema:
 *           type: string
 *       - in: query
 *         name: floor
 *         required: false
 *         description: Floor of the space to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 location:
 *                   type: string
 *                 capacity:
 *                   type: integer
 *                 features:
 *                   type: array
 *                   items:
 *                     type: string
 *                 maxOccupants:
 *                   type: integer
 *                 reservabilityCategory:
 *                   type: string
 *                 floor:
 *                   type: integer
 *       404:
 *         description: Space not found
 */
router.get('/', (req, res) => spaceController.processRequest(req, res, ENTITY, "GET"));

router.put("/:id", (req, res) => spaceController.processRequest(req, res, ENTITY, "PUT"));

module.exports = router;
