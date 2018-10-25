var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
SpotifyStrategy = require('passport-spotify').Strategy;

// when possible, create passport-local strategy!

passport.use(new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        console.log('passport callback function fired.');
        console.log(profile);
    }));

passport.use(new SpotifyStrategy({
        callbackURL: '/auth/spotify/redirect',
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        console.log(profile);
    }));