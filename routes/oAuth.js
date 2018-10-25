var router = require('express').Router();
var passport = require('passport');

/**
 * Router that handles User Authentications,
 * aswell as third-party app connections
 */

// oAuth Login
router.get('/login', function(req, res) {
    res.render('views/login', { title: 'Login' });
});
// oAuth Logout
router.get('/logout', function(req, res) {
    // todo: code redirect url, and a flash message to show on the
    // webpage that says "logged out"
    res.send('logging out...');
});

// == Third Party Login Options
// == Google & Spotify
// = ( SoundCloud, Instagram & Facebook Soon... )

// oAuth Google Login
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// oAuth Spotify Login
router.get('/spotify', passport.authenticate('spotify', {
    scope: ['']
}));

module.exports = router;