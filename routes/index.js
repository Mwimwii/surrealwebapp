var express = require('express');
var router = express.Router();

// req = request (HTTP)
// res = response (HTTP)
// next = callback argument to the middleware function

// secure index page to users only
var authCheck = function(req, res, next) {
    if (!req.user) {
        // if user is not logged in
        res.redirect('/auth/login');
    } else {
        // if user is logged in
        next();
    }
};

// [Home (Index)] Router
router.get('/', authCheck, function(req, res, next) {
    res.render('views/index', {
        title: 'INDEX',
        alien: req.user
    });
});

module.exports = router;