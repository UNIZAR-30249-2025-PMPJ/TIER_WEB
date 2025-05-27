var express = require('express');
var router = express.Router();
var peopleController = require("../controllers/requestController");
const ENTITY = "Auth";

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login to the application
 *     description: Authenticates a user and returns a JWT token.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 838383@unizar.es
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzODM4MyIsIm5hbWUiOiJQcnVlYmEiLCJlbWFpbCI6IjgzODM4M0B1bml6YXIuZXMiLCJkZXBhcnRtZW50IjoidW5kZWZpbmVkIiwicm9sZSI6IkFsdW1ubyIsImlhdCI6MTc0MzAyMTQzOX0.OxfVbzZOw-2-FJECUoloY5EHH3QevlLJcaTa6ieprd0
 *       404:
 *        description: Person not found
 *       500:
 *        description: Internal server error
 */
router.post('/', (req, res) => peopleController.processRequest(req, res, ENTITY, "LOGIN"));


module.exports = router;
