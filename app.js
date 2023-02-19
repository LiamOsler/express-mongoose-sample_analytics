var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

var app = express();
app.use(cors());



var dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_URL}`;
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set("strictQuery", true);


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected Successfully");
});

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
var customerRouter = require('./routes/customer');
var transactionRouter = require('./routes/transaction');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // // Website you wish to allow to connect
  const allowedOrigins = [ 'https://scintillating-toffee-28fea0.netlify.app', 'https://group19project.netlify.app/', 'https://darling-sunshine-0ef6da.netlify.app'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.setHeader('Access-Control-Allow-Origin', 'https://scintillating-toffee-28fea0.netlify.app');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/customer', customerRouter);
app.use('/transaction', transactionRouter);


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