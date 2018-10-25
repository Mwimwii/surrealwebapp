require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var http = require('http').Server(express);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// [Databse]
var mongodb = require('mongoose');

// [Import Passport-Setup]
var passportSetup = require('./config/passport-setup');

// [Import Routes]
var indexRoutes = require('./routes');
var usersRoutes = require('./routes/users');
var authRoutes = require('./routes/oAuth');

// [Init Express as App]
var app = express();

// [Set Up Views]
app.set('views', path.join(__dirname, 'templates'));
// [Set Up View Engine]
app.set('view engine', 'pug');

// [Set Up Options & Lib]
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// [Set Up Static Files Route]
app.use(express.static(path.join(__dirname, 'public')));

// [Set Up Routes]
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
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