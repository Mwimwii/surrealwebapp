var express = require('express');
var router = express.Router();

// secure page to logged in users only
var authCheck = function(req, res, next) {
    if (!req.user) {
        // if user is not logged in
        res.redirect('/auth/login');
    } else {
        // if user is logged in
        next();
    }
};

// [ User Profile ]
// View User Profile Information, Option to Edit the Information
router.get('/', authCheck, function(req, res, next) {
    res.render('views/user/user', {
        title: 'USER PROFILE',
        alien: req.user
    });
});

router.get('/edit', authCheck, function(req, res, next) {
    res.render('views/user/edit', {
        title: 'EDIT YOUR PROFILE',
        alien: req.user
    });
});

// // [ User Statistics ]
// // View User Statistics from Connected Apps & Website Use
// router.get('/stats', authCheck, function(req, res, next) {
//     res.render('views/user/stats/stats', {
//         title: 'USER STATISTICS',
//         alien: req.user
//     });
// });

// // [ Statistics Map ]
// // View User Statistics on a Map

// router.get('/stats/map', authCheck, function(req, res, next) {
//     res.render('views/user/stats/map', {
//         title: 'STATISTICS MAP',
//         alien: req.user
//     });
// });

module.exports = router;