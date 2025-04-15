const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../../docs.md');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error loading documentation');
        } else {
            const html = marked.parse(data);
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Async API Docs</title>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: sans-serif; padding: 2em; line-height: 1.6; max-width: 800px; margin: auto; }
                        code { background: #f4f4f4; padding: 0.2em 0.4em; }
                        pre { background: #f4f4f4; padding: 1em; overflow-x: auto; }
                        table { border-collapse: collapse; }
                        td, th { border: 1px solid #ccc; padding: 0.5em; }
                    </style>
                </head>
                <body>${html}</body>
                </html>
            `);
        }
    });
});

module.exports = router;
