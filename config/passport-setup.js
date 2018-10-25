var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
SpotifyStrategy = require('passport-spotify').Strategy;

// when possible, create passport-local strategy!

passport.use(new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function() {
        //google callback function
    }));

passport.use(new SpotifyStrategy({
        callbackURL: '/auth/spotify/redirect',
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    },
    function() {
        //spotify callback function
    }));