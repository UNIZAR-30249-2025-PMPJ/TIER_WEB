require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app/routes/index');
var personRouter = require('./app/routes/people');
var authRouter = require('./app/routes/auth');
var spaceRouter = require('./app/routes/space');
var reservationRouter = require('./app/routes/reservation');

const cors = require("cors");


// Swagger to document the API
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Set up swagger documentation
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LABIS API",
      description: "LABIS API Information",
      servers: ["http://localhost:3000"],
      version: "1.0.0",

    }
  },
  apis: ["./app/routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);



var app = express();
app.use(cors()); 
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/people', personRouter);
app.use('/login',authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
