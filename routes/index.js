var express = require('express');
var router = express.Router();

// [Home (Index)] Router
router.get('/', function(req, res, next) {
    res.render('views/index', { title: 'index.url' });
});

io.on('connection', function(socket) {
    console.log('a user connected to home page');
});

module.exports = router;