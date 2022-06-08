var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

// const url = 'mongodb+srv://prakash214:' + process.env.MONGO_ATLAS_PW + '@node-rest.no4xh83.mongodb.net/?retryWrites=true&w=majority';
// const connect = mongoose.connect(url);

const url = 'mongodb://localhost:27017/todos' && 'mongodb://localhost:27017/users';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connected correctly to server');
}, (err) => {console.log(err);});

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
var todoRouter = require('./routes/todosRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
