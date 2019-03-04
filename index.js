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
});

app.get('/ttt/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/ttt/in.html'));
});

app.listen(80);
