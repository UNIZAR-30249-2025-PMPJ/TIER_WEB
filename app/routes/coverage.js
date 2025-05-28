const express = require('express');
const path = require('path');

const router = express.Router();

// Servir los archivos estáticos de coverage (Jest)
const coveragePath = path.join(__dirname, '../../coverage/report');
router.use('/', express.static(coveragePath));

// Redirigir /coverage a /coverage/index.html si quieres
router.get('/', (req, res) => {
    res.redirect('/index.html');
});

module.exports = router;
