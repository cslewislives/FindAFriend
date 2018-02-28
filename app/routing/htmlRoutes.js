const express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/survey', (req, res) => res.sendFile(path.join(__dirname, '../public/survey.html')));

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));

module.exports = router;