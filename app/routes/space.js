var express = require('express');
var router = express.Router();
var spaceController = require("../controllers/requestController");
const ENTITY = "Space";


/**
 * @swagger
 * /people/{id}:
 *   get:
 *     tags:
 *      - People
 *     summary: Retrieve a person by ID
 *     description: Use this endpoint to retrieve a person by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A person object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 department:
 *                   type: string
 *                 role:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *       404:
 *         description: Person not found
 */
router.get('/', (req, res) => spaceController.processRequest(req, res, ENTITY, "GET"));

module.exports = router;
