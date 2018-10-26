var express = require('express');
var router = express.Router();

// [ User Profile ]
// View User Profile Information, Option to Edit the Information
router.get('/', function(req, res, next) {
    res.render('views/user/user', {
        title: 'USER PROFILE'
    });
});

router.get('/edit', function(req, res, next) {
    res.render('views/user/edit', {
        title: 'EDIT YOUR PROFILE'
    });
});

// [ User Statistics ]
// View User Statistics from Connected Apps & Website Use
router.get('/stats', function(req, res, next) {
    res.render('views/user/stats/stats', {
        title: 'USER STATISTICS'
    });
});

// [ Statistics Map ]
// View User Statistics on a Map
router.get('/stats/map', function(req, res, next) {
    res.render('views/user/stats/map', {
        title: 'STATISTICS MAP'
    });
});

module.exports = router;