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
 *     summary: Get all spaces (Not implemented)
 *     description: This endpoint is not implemented yet, but it will allow retrieving all spaces.
 *     responses:
 *       501:
 *         description: Not Implemented
 */
router.get('/', (req, res) => {
  res.status(501).send({
    error: "Not Implemented",
    message: "GET /spaces endpoint is not implemented yet."
  });
});

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
  res.status(501).send({
    error: "Not Implemented",
    message: "POST /spaces endpoint is not implemented yet."
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
    message: "PUT /spaces/{id} endpoint is not implemented yet."
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
  res.status(501).send({
    error: "Not Implemented",
    message: "DELETE /spaces/{id} endpoint is not implemented yet."
  });
});

module.exports = router;
