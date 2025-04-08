var express = require('express');
var router = express.Router();
var requestController = require("../controllers/requestController");
const ENTITY = "Space";  


/**
 * @swagger
 * /spaces:
 *   get:
 *     tags:
 *       - Spaces
 *     summary: Retrieve a specific space by ID, maxOccupants, and reservability category
 *     parameters:
 *       - name: id
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: ID of the space
 *       - name: maxOccupants
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *         description: Maximum number of occupants
 *       - name: reservabilityCategory
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Category of reservability
 *     responses:
 *       200:
 *         description: Space information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 maxOccupants:
 *                   type: integer
 *                 reservabilityCategory:
 *                   type: string
 */
router.get('/', (req, res) => 
  requestController.processRequest(req, res, ENTITY, "SEARCH")
);


/**
 * @swagger
 * /spaces:
 *   post:
 *     tags:
 *       - Spaces
 *     summary: Create a new space (Not implemented)
 *     description: This endpoint is not implemented yet, but it will allow creating a new space.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       501:
 *         description: Not Implemented
 */
router.post('/', (req, res) => {
  res.status(405).send({
    error: "Method Not Allowed",
    message: "POST method is not allowed for /spaces."
  });
});

/**
 * @swagger
 * /spaces/{id}:
 *   put:
 *     tags:
 *       - Spaces
 *     summary: Update a space by ID (Not implemented)
 *     description: This endpoint is not implemented yet, but it will allow updating a space by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the space to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       501:
 *         description: Not Implemented
 */
router.put('/:id', (req, res) => {
  res.status(501).send({
    error: "Not Implemented",
    message: "PUT /spaces endpoint is not implemented yet."
  });
});

/**
 * @swagger
 * /spaces/{id}:
 *   delete:
 *     tags:
 *       - Spaces
 *     summary: Delete a space by ID (Not implemented)
 *     description: This endpoint is not implemented yet, but it will allow deleting a space by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the space to delete
 *         schema:
 *           type: string
 *     responses:
 *       501:
 *         description: Not Implemented
 */
router.delete('/:id', (req, res) => {
  res.status(405).send({
    error: "Method Not Allowed",
    message: "PUT method is not allowed for /spaces."
  });
});

module.exports = router;
