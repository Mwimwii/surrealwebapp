var router = require('express').Router();

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
router.get('/google', function(req, res) {
    res.send('logging in with google');
});

// oAuth Spotify Login
router.get('/spotify', function(req, res) {
    res.send('logging in with spotify');
});

module.exports = router;