var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');
var spotifyStrategy = require('passport-spotify');

passport.use(
    new googleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    function() {
        //google callback function
    }
);

passport.use(
    new spotifyStrategy({
        callbackURL: '/auth/spotify/redirect',
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    }),
    function() {
        //google callback function
    }
);