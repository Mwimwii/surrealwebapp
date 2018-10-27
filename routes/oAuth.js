var router = require('express').Router();
var passport = require('passport');

/**
 * Router that handles User Authentications,
 * aswell as third-party app connections
 */

// oAuth Login
router.get('/login', function(req, res) {
    res.render('views/auth/login', { title: 'Login' });
});
// oAuth Logout
router.get('/logout', function(req, res) {
    req.logout();
    console.log('user logged out');
    res.redirect('/');
});

// == Third Party Login Options
// == Google & Spotify
// = ( SoundCloud, Instagram & Facebook Soon... )

// oAuth Google Login
// ==================
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'),
    function(req, res) {
        // display user if user is found
        // res.send(req.user);
        res.redirect('/user');
    });

// oAuth Spotify Login
// ===================
router.get('/spotify', passport.authenticate('spotify', {
    scope: [
        'user-read-private',
        'user-read-birthdate',
        'user-read-email',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-follow-read',
        'user-top-read',
        'user-read-recently-played',
        'user-library-read',
        'playlist-read-private',
        'playlist-read-collaborative'
    ]
}));

router.get('/spotify/redirect', passport.authenticate('spotify'),
    function(req, res) {
        // display user if user is found
        // res.send(req.user);
        res.redirect('/user');
    });

// export 
module.exports = router;