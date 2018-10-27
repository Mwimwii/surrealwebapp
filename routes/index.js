var express = require('express');
var router = express.Router();

// req = request (HTTP)
// res = response (HTTP)
// next = callback argument to the middleware function

// [Home (Index)] Router
router.get('/', function(req, res, next) {
    res.render('views/index', {
        title: 'INDEX',
        alien: req.user
    });
});

// io.on('connection', function(socket) {
//     console.log('a user connected to home page');
// });

module.exports = router;