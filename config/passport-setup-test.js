var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var SpotifyStrategy = require('passport-spotify').Strategy;

// localStrategy is on pause rn, continue creating this feature later on!
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user-model');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        done(null, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.use(new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('Google callback function fired');
        // console.log(profile);
        // check if user exists in database
        User.findOneAndUpdate({
            googleId: profile.id
        }).then(function(currentUser) {
            if (currentUser) {
                // user exists
                console.log('[User Found] user is: ', currentUser);
                new User({
                    googleId: profile.id,
                    googleName: profile.displayName,
                    googleImg: profile._json.image.url
                }).save().then(function() {
                    console.log(currentUser + ' has been updated with google connection');
                });
                done(null, currentUser);
            } else {
                // user doesn't exist
                console.log('[User Not Found]');
            }
        })
    }));

passport.use(new SpotifyStrategy({
        callbackURL: '/auth/spotify/redirect',
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
        console.log('Spotify callback function fired');
        // console.log(profile);
        // a-syncronous task
        // check if user exists
        User.findOne({
            spotifyId: profile.id
        }).then(function(currentUser) {
            if (currentUser) {
                console.log('[User Found]> user is: ', currentUser);
                done(null, currentUser);
            } else {
                new User({
                    spotifyId: profile.id,
                    spotifyName: profile.displayName,
                    spotifyUrl: profile.profileUrl,
                    spotifyImg: profile.photos
                }).save().then(function(newUser) {
                    console.log('new user created from spotify: ' + newUser);
                    done(null, newUser);
                })
            }
        })
    }));