var express = require('express');
var router = express.Router();

// [Home (Index)] Router
router.get('/', function(req, res, next) {
    res.render('views/index', { title: 'index.url' });
});

module.exports = router;