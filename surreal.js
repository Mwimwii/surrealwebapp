require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var http = require('http').Server(express);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var art = require('ascii-art');
var cookieSession = require('cookie-session');
var passport = require('passport');

// [Databse]
var mongodb = require('mongoose');
// connect to database (mongodb)
var mdb = "[MongoDB] ";
var db_success = "Connected to the Database";
db_failure = "Error Connecting to the Database... ";
// art.style(db_success, 'green');
// art.style(db_failure, 'red');
mongodb.connect(process.env.MONGODB_URL, function(error) {
    if (error) {
        console.log(mdb + db_failure + error);
    } else {
        console.log(mdb + db_success);
    }
});

// [Import Passport-Setup]
var passportSetup = require('./config/passport-setup');

// [Import Routes]
var indexRoutes = require('./routes');
var userRoutes = require('./routes/user');
var statsRoutes = require('./routes/user-stats');
// var usersRoutes = require('./routes/users');
var authRoutes = require('./routes/oauth');

// [Init Express as App]
var app = express();

// [Set Up Views]
app.set('views', path.join(__dirname, 'templates'));
// [Set Up View Engine]
app.set('view engine', 'pug');

// [Set Up User Session & Options]
app.use(cookieSession({
    // age of cookie is a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

// [Set Up Options & Lib]
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// [Set Up Static Files Route]
app.use(express.static(path.join(__dirname, 'public')));

// [Set Up Routes]
app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/user/stats', statsRoutes);
// app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

// [404]
app.use(function(req, res, next) {
    // catch 404 and forward to error handler
    next(createError(404));
});

// [Error Handler]
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('errors/error');
});

module.exports = app;