var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://130.245.170.98:27017/";

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//app.get('/', function(req, res){
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("warmup");
      var myobj = { name: req.body.name, email: req.body.name, psword: req.body.psword };
      dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
});

app.post('/login', function(req, res){
  var name = req.body.name;
  res.send('Hi, '+name);


});

router.get('/ttt/', function(req, res){
     res.sendFile(path.join(__dirname+'/views/ttt/in.html'));
});



app.use('/', router);
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
module.exports = router;
