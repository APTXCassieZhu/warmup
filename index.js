var express = require('express');
var app = express();
//var router = express.Router();

app.get('/', function(req, res){
//router.get('/', function(req, res, next){
  res.send("Hello world!");
  //res.render('index', {title: 'Express'});
});

app.listen(80);
//module.exports = router;
