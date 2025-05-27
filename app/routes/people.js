var express = require('express');
var router = express.Router();
var peopleController = require("../controllers/requestController");
const { authenticateJWT } = require('../middleware/auth');
const ENTITY = "Person";


/**
 * @swagger
 * /api/people/{id}:
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
 *       500:
 *         description: Internal server error
 */
router.get('/:id',authenticateJWT, (req, res) => peopleController.processRequest(req, res, ENTITY, "GETBYID"));

/**
 * @swagger
 * /api/people:
 *   post:
 *     tags:
 *      - People
 *     summary: Create a new person
 *     description: Use this endpoint to create a new person.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               department:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Person created
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
 *       409:
 *         description: Person already exists with this ID
 *       500:
 *         description: Internal server error
 */
router.post('/',authenticateJWT, (req, res) => peopleController.processRequest(req, res, ENTITY, "CREATE"));



/**
 * @swagger
 * /api/people/{id}:
 *   put:
 *     tags:
 *      - People
 *     summary: Update a person by ID
 *     description: Use this endpoint to update a person's information by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               department:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Person updated successfully
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
 *       400:
 *         description: Invalid role or department for the role
 *       404:
 *         description: Person not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', authenticateJWT, (req, res) => peopleController.processRequest(req, res, ENTITY, "UPDATE"));





/**
 * @swagger
 * /api/people/{id}:
 *   delete:
 *     tags:
 *      - People
 *     summary: Delete a person by ID
 *     description: Use this endpoint to delete a person by their unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the person to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Person deleted successfully
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
 *       500:
 *         description: Internal server error
 */
router.delete('/:id',authenticateJWT, (req, res) => peopleController.processRequest(req, res, ENTITY, "DELETE"));




module.exports = router;
