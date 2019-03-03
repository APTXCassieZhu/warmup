var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://130.245.170.98:27017/";

// get form data from req body
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// routers
var login = require('./routes/login.js');
var adduser = require('./routes/adduser.js');
//var verify = require('./routes/verify.js');

// add api
app.use('/login', login);
app.use('/adduser', adduser);
//app.use('/verify', verify);

// view engine setup
var cons = require('consolidate');
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// use file
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

//app.post('/login', function(req, res){
//    var name = req.body.name;
//    res.send('Hi, '+name);
MongoClient.connect(url, function(err, db) {
    if(err){
      console.log(err);
    }else{
      console.log("Success connect to database");
    }
    var dbo = db.db("warmup");
    app.locals.db = dbo;
    //var myobj = { name: req.body.name, email: req.body.name, psword: req.body.psword };
    //dbo.collection("users").insertOne(myobj, function(err, res) {
    //    if (err) throw err;
    //    console.log("1 document inserted");
    //    db.close();
    //  });
});
//});

app.get('/ttt/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/ttt/in.html'));
});



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

app.listen(80);
//module.exports = router;
