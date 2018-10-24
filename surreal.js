require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongo = require('mongoose');

// [Set Up Passport]
var passportSetup = require('./config/passport-setup');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var authRoutes = require('./routes/oAuth');

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
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('errors/error');
});

module.exports = app;