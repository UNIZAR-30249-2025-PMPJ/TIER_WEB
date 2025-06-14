var express = require('express');
var router = express.Router();
var reservationController = require("../controllers/requestController");
const ENTITY = "Reservation";
const { authenticateJWT } = require('../middleware/auth');
/**
 * @swagger
 * /api/reservations:
 *   get:
 *     tags:
 *      - Reservation
 *     summary: Retrieve reservations
 *     description: Use this endpoint to retrieve reservations.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: false
 *         description: ID of the reservation to retrieve
 *         schema:
 *           type: string
 *       - in: query
 *         name: spaceIds
 *         required: false
 *         description: ID of the space to retrieve reservations for
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *       - in: query
 *         name: personId
 *         required: false
 *         description: ID of the person to retrieve reservations for
 *         schema:
 *           type: string
 *       - in: query
 *         name: startTime
 *         required: false
 *         description: Start time from which to retrieve reservations. If provided, duration must also be provided.
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: duration
 *         required: false
 *         description: Duration in minutes from the startTime to check for reservations. If provided, startTime must also be provided.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: state
 *         required: false
 *         description: State of the reservation to retrieve
 *         schema:
 *           type: array
 *           items:
 *             type: string
 * 
 *     responses:
 *       200:
 *         description: A list of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   usage:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   duration:
 *                     type: integer
 *                   maxAttendees:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   state:
 *                     type: string
 *                   personId:
 *                     type: string
 *                   spaceIds:
 *                     type: array
 *                     items:
 *                       type: string
 *       400:
 *         description: Start time and duration must be provided together
 *       404:
 *         description: Reservations not found
 *       500:
 *         description: Internal server error
 */
router.get('/',authenticateJWT, (req, res) => reservationController.processRequest(req, res, ENTITY, "GET"));

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     tags:
 *      - Reservation
 *     summary: Create a new reservation
 *     description: Use this endpoint to create a new reservation.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usage:
 *                 type: string
 *               startTime: 
 *                 type: string
 *                 format: date-time
 *               duration:
 *                 type: integer
 *               maxAttendees:
 *                 type: integer
 *               description:
 *                 type: string
 *               spaceIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Reservation created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   usage:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   duration:
 *                     type: integer
 *                   maxAttendees:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   state:
 *                     type: string
 *                   personId:
 *                     type: string
 *                   spaceIds:
 *                     type: array
 *                     items:
 *                       type: string
 *       400:
 *         description: Invalid space IDs
 *       409:
 *         description: Reservation already exists for this time and space
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Space, building or person not found
 *       500:
 *         description: Internal server error
 */
router.post('/',authenticateJWT, (req, res) => reservationController.processRequest(req, res, ENTITY, "POST"));


/**
 * @swagger
 * /api/reservations/{id}:
 *   put:
 *     tags:
 *      - Reservation
 *     summary: Update a reservation
 *     description: Use this endpoint to update a reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the reservation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               state:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   usage:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   duration:
 *                     type: integer
 *                   maxAttendees:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   state:
 *                     type: string
 *                   personId:
 *                     type: string
 *                   spaceIds:
 *                     type: Array
 *                     items:
 *                       type: string
 *       404:
 *         description: Reservation not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id",authenticateJWT, (req, res) => reservationController.processRequest(req, res, ENTITY, "PUT"));

/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     tags:
 *      - Reservation
 *     summary: Delete a reservation
 *     description: Use this endpoint to delete a reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the reservation to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   usage:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   duration:
 *                     type: integer
 *                   maxAttendees:
 *                     type: integer
 *                   description:
 *                     type: string
 *                   state:
 *                     type: string
 *                   personId:
 *                     type: string
 *                   spaceIds:
 *                     type: Array
 *                     items:
 *                       type: string
 *       404:
 *         description: Reservation not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id",authenticateJWT, (req, res) => reservationController.processRequest(req, res, ENTITY, "DELETE"));

module.exports = router;
