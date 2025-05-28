const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/coverage/lcov-report/index.html');
});

module.exports = router;
