var express = require('express');
var router = express.Router();

// [ User Profile ] Router
router.get('/', function(req, res, next) {
    res.render('views/user/user', {
        title: 'USER PROFILE'
    });
});

router.get('/stats', function(req, res, next) {
    res.render('views/user/stats/stats', {
        title: 'USER STATISTICS'
    });
});

router.get('/stats/map', function(req, res, next) {
    res.render('views/user/stats/map', {
        title: 'STATISTICS MAP'
    });
});

module.exports = router;