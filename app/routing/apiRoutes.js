const express = require('express'),
    friends = require('../data/friend'),
    router = express.Router();

router.route('/friends')
    .get((req, res) => res.json(friends))
    .post((req, res) => {
    
    });

module.exports = router;