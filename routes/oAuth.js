var router = require('express').Router();
var passport = require('passport');

/**
 * Router that handles User Authentications,
 * aswell as third-party app connections
 */

// secure page to logged in users only
var authCheck = function(req, res, next) {
    if (!req.user) {
        // if user is not logged in
        next();
    } else {
        // if user is logged in
        res.redirect('/');
    }
};

// oAuth Sign In
router.get('/signin', authCheck, function(req, res) {
    res.render('views/auth/signin', { title: 'Login' });
});
// oAuth Sign Up
router.get('/signup', authCheck, function(req, res) {
    res.render('views/auth/signup', { title: 'Sign Up' });
});
// oAuth Sign Out
router.get('/signout', function(req, res) {
    req.logout();
    console.log('signed a user out');
    res.redirect('/signin');
});

// == Third Party Login Options
// == Google & Spotify
// = ( SoundCloud, Instagram & Facebook Soon... )

// oAuth Google Login
// ==================
router.get('/google', authCheck, passport.authenticate('google', {
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
router.get('/spotify', authCheck, passport.authenticate('spotify', {
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

// export router
module.exports = router;