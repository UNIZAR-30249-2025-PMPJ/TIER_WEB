var express = require('express');
var router = express.Router();
var requestController = require("../controllers/requestController");
const ENTITY = "Reservation";  // Aquí debería ser 'Space' si estás trabajando con espacios.


/**
 * @swagger
 * /reservation:
 *   get:
 *     tags:
 *       - Reservation
 *     summary: Get all reservation (Not implemented)
 *     description: This endpoint is not implemented yet, but it will allow retrieving all reservation.
 *     responses:
 *       501:
 *         description: Not Implemented
 */
router.get('/', (req, res) => {
  res.status(501).send({
    error: "Not Implemented",
    message: "GET /reservation endpoint is not implemented yet."
  });
});

/**
 * @swagger
 * /reservation:
 *   post:
 *     tags:
 *       - Reservation
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
    message: "POST /reservation endpoint is not implemented yet."
  });
});

/**
 * @swagger
 * /reservation/{id}:
 *   put:
 *     tags:
 *       - Reservation
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
    message: "PUT /reservation/{id} endpoint is not implemented yet."
  });
});

/**
 * @swagger
 * /reservation/{id}:
 *   delete:
 *     tags:
 *       - Reservation
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
    message: "DELETE /reservation/{id} endpoint is not implemented yet."
  });
});

module.exports = router;
