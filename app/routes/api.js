const express = require('express');
const router = express.Router();

const indexRouter = require('./index');
const personRouter = require('./people');
const authRouter = require('./auth');
const spaceRouter = require('./space');
const reservationsRouter = require('./reservations');
const notificationRouter = require('./notifications');
const buildingRouter = require('./buildings');
const coverageRouter = require('./tests-coverage');
const path = require('path');


router.use('/', indexRouter);
router.use('/people', personRouter);
router.use('/login', authRouter);
router.use('/spaces', spaceRouter);
router.use('/reservations', reservationsRouter);
router.use('/notifications', notificationRouter);
router.use('/buildings', buildingRouter);
router.use('/tests-coverage', express.static(path.join(__dirname, '../coverage/lcov-report')));




module.exports = router;
