var express = require('express');
var router = express.Router();
var buildingController = require("../controllers/requestController");
const ENTITY = "Building";

/**
 * @swagger
 * /buildings:
 *   get:
 *     tags:
 *      - Building
 *     summary: Retrieve buildings
 *     description: Use this endpoint to retrieve buildings.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: false
 *         description: ID of the building to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Buildings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   openTime:
 *                     type: string
 *                     format: date-time
 *                   closeTime:
 *                     type: string
 *                     format: date-time
 *                   maxUsage:
 *                     type: integer
 *                   holidays:
 *                     type: array
 *                     items:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Reservation not found
 */
router.get('/', (req, res) => buildingController.processRequest(req, res, ENTITY, "GET"));


/**
 * @swagger
 * /buildings/{id}:
 *   put:
 *     tags:
 *       - Building
 *     summary: Update a building
 *     description: Use this endpoint to update a building's information.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the building to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: Building object that needs to be updated
 *         schema:
 *           type: object
 *           properties:
 *             openTime:
 *               type: string
 *               format: date-time
 *             closeTime:
 *               type: string
 *               format: date-time
 *             maxUsage:
 *               type: integer
 *             holidays:
 *               type: array
 *               items:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Building updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 openTime:
 *                   type: string
 *                   format: date-time
 *                 closeTime:
 *                   type: string
 *                   format: date-time
 *                 maxUsage:
 *                   type: integer
 *                 holidays:
 *                   type: array
 *                   items:
 *                     type: string
 *                     format: date-time
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Building not found
 */
router.put("/:id", (req, res) => buildingController.processRequest(req, res, ENTITY, "PUT"));


module.exports = router;
