var express = require('express');
var router = express.Router();
var requestController = require("../controllers/requestController");
const { authenticateJWT } = require('../middleware/auth');
const ENTITY = "Notification";


/**
 * @swagger
 * /api/notifications/{id}:
 *   get:
 *     tags:
 *      - Notifications
 *     summary: Retrieve all notifications by user ID
 *     description: Use this endpoint to retrieve all notifications by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to retrieve notifications for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A notification object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 text:
 *                   type: string
 *       404:
 *         description: Person not found
 *       500:
 *        description: Internal server error
 */
router.get('/:id',authenticateJWT, (req, res) => requestController.processRequest(req, res, ENTITY, "GETBYUSER"));


module.exports = router;
