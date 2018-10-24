var express = require('express');
var router = express.Router();

/**
 * [GET] Users listing from database
 */
router.get('/users', function(req, res, next) {
    res.send('list all users for the website');
});

module.exports = router;