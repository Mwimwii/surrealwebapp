var express = require('express');
var router = express.Router();

// secure page to logged in users only
var authCheck = function(req, res, next) {
    if (!req.user) {
        //if user is not logged in
        res.redirect('/auth/login');
    } else {
        //if they are logged in
        next();
    }
};

// [ User Statistics ]
// View User Statistics from Connected Apps & Website Use
router.get('/', authCheck, function(req, res, next) {
    res.render('views/user/stats/stats', {
        title: 'USER STATISTICS',
        alien: req.user
    });
});

// [ Statistics Map ]
// View User Statistics on a Map
router.get('/map', authCheck, function(req, res, next) {
    res.render('views/user/stats/map', {
        title: 'STATISTICS MAP',
        alien: req.user
    });
});

module.exports = router;