var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const db = "mongodb://password:password123@ds135810.mlab.com:35810/mwadb"
mongoose.connect(db,err =>{
  if(err){
    console.error("error"+err)
  }else{ 
    console.log('connected to mongodb')
  }
})
var emailRouter = require('./routes/emai');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var examsRouter = require('./routes/exams');
var staffsRouter = require('./routes/staffs');
var studentsRouter = require('./routes/students');

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/app', usersRouter);

app.use('/email', emailRouter);
app.use('/students', studentsRouter);
app.use('/staffs', staffsRouter);
app.use('/exams', examsRouter);
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
  res.render('error');
});
app.listen(3090,()=>{
console.log("server running on");
});

module.exports = app;
