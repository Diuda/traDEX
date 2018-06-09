var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){

  var filePath = path.join(__dirname + '/views/home.html')
  // console.log(filePath);
  res.sendFile(filePath);


});
app.post('/submit',function(req,res){

  var user = req.body;
  var username = user.username;
  var password = user.password;


  if(username.toString()==='trader'&&password.toString()==='password')
    
   res.end(JSON.stringify({redirectURL:'/trader',data:{},'allow':true}))
  
  else if(username.toString()==='customer'&&password.toString()==='password')
   res.end(JSON.stringify({redirectURL:'/customer',data:{},'allow':true}))
  
  else{
    // res.status(401);
    // res.status(500).json({ error: 'message' })
    return res.status(400).send({
      message: 'This is an error!'
   });
    // res.sendFile(JSON.stringify({'error':'Unauthorized access' }));
    // res.json({});
  }
})

app.get('/trader',function(req,res){


  

  console.log('at trader')
res.sendFile(path.join(__dirname + '/views/trader.html'))

})

app.get('/customer',function(req,res){ 


  console.log('at customer')
res.sendFile(path.join(__dirname + '/views/customer.html'))

  
})

// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
