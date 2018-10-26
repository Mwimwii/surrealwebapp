var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
SpotifyStrategy = require('passport-spotify').Strategy;
var User = require('../models/user-model');

// when possible, create passport-local strategy!

passport.use(new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        console.log('');
        console.log(profile);
        // a-syncronous task
        new User({
            googleId: profile.id,
            googleName: profile.displayName,
            googleImg: profile._json.image.url
        }).save().then((newUser), function(req, res) {
            console.log('new user created: ' + newUser);
        })
    }));

passport.use(new SpotifyStrategy({
        callbackURL: '/auth/spotify/redirect',
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        console.log(profile);
    }));