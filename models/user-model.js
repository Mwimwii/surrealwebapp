var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// Schema for the User Model
var userSchema = new Schema({
    userImg: String,
    userName: String,
    userEmail: String,
    userPass: {
        type: String
    },
    phoneNum: Number,
    userCountry: String,
    googleId: String,
    googleName: String,
    googleImg: String,
    spotifyId: String,
    spotifyName: String,
    spotifyUrl: String,
    spotifyImg: String
});

userSchema.methods.hashPassword = function() {

};

// mongo sees this model, and knows that a collection of these
// "user" models will be called "users"
var User = mongoose.model('user', userSchema);

module.exports = User;