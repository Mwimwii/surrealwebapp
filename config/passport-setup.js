var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
SpotifyStrategy = require('passport-spotify').Strategy;
var User = require('../models/user-model');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        done(null, user);
    });
});

// when possible, create passport-local strategy!

passport.use(new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('Google callback function fired');
        // console.log(profile);
        // a-syncronous task
        // check if user exists in database
        User.findOne({
            googleId: profile.id
        }).then(function(currentUser) {
            if (currentUser) {
                // user exists
                console.log('[User Found]> user is: ', currentUser);
                done(null, currentUser);
            } else {
                // user doesn't exist, so create one
                new User({
                    googleId: profile.id,
                    googleName: profile.displayName,
                    googleImg: profile._json.image.url
                }).save().then(function(newUser) {
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
                })
            }
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