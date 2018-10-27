var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema for the User Model
var userSchema = new Schema({
    userImg: String,
    userName: String,
    userEmail: String,
    userPass: String,
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

// mongo sees this model, and knows that a collection of these
// "user" models will be called "users"
var User = mongoose.model('user', userSchema);

module.exports = User;