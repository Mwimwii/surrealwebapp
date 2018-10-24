var router = require('express').Router();
var passport = require('passport');

/**
 * Router that handles User login/logout,
 * aswell as third-party app connections
 */

// oAuth Login
router.get('/login', function(req, res) {
    res.render('views/login', { title: 'Login' });
});

// oAuth Logout
router.get('/logout', function(req, res) {
    res.send('logging out...');
});

// oAuth Google Login
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// oAuth Spotify Login
router.get('/spotify', passport.authenticate('spotify', {
    scope: ['']
}));

module.exports = router;