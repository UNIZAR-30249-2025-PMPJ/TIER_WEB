var express = require('express');
var router = express.Router();
var spaceController = require("../controllers/requestController");
const ENTITY = "Space";


/**
 * @swagger
 * /api/spaces:
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
 *         description: A list of spaces
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   reservable:
 *                     type: boolean
 *                   occupants:
 *                     type: integer
 *                   maxOccupants:
 *                     type: integer
 *                   maxUsage:
 *                     type: integer
 *                   openTime:
 *                     type: string
 *                     format: date-time
 *                   closeTime:
 *                     type: string
 *                     format: date-time
 *                   building:
 *                     type: string
 *                   floor:
 *                     type: string
 *                   size:
 *                     type: integer
 *                   reservabilityCategory:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                   type:
 *                     type: string
 *                   assignedTo:
 *                     type: string
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Space not found
 */
router.get('/',authenticateJWT, (req, res) => spaceController.processRequest(req, res, ENTITY, "GET"));



/**
 * @swagger
 * /api/spaces/{id}:
 *   put:
 *     tags:
 *       - Space
 *     summary: Update a space
 *     description: Use this endpoint to update a space by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the space to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: The space object to update
 *         schema:
 *           type: object
 *           properties:
 *             reservable:
 *               type: boolean
 *             maxUsage:
 *               type: integer
 *             openTime:
 *               type: string
 *               format: date-time
 *             closeTime:
 *               type: string
 *               format: date-time
 *             reservabilityCategory:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *             assignedTo:
 *               type: string
 *     responses:
 *       200:
 *         description: Space updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 space:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     reservable:
 *                       type: boolean
 *                     occupants:
 *                       type: integer
 *                     maxOccupants:
 *                       type: integer
 *                     maxUsage:
 *                       type: integer
 *                     openTime:
 *                       type: string
 *                       format: date-time
 *                     closeTime:
 *                       type: string
 *                       format: date-time
 *                     building:
 *                       type: string
 *                     floor:
 *                       type: string
 *                     size:
 *                       type: integer
 *                     reservabilityCategory:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                     type:
 *                       type: string
 *                     assignedTo:
 *                       type: string
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Space not found
 */
router.put("/:id",authenticateJWT, (req, res) => spaceController.processRequest(req, res, ENTITY, "PUT"));

module.exports = router;
