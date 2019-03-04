var express = require('express');
var router = express.Router();
var path = require('path');

// get form data from req body
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json();

// GET users listing.
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/..'+'/views/adduser.html'));
});

router.post('/', jsonParser, function(req, res) {
  json = {status:"OK"};
  data = req.body;
  data['valid'] = "false";
  data['key'] = Math.floor((Math.random() * 8999) + 1000);

  var db = req.app.locals.db;
  
  // add the new user to mongodb
  db.collection("users").insertOne(data, function(err, res){
    if (err) {
      console.log(err);
      json.status="ERROR";
  }else{
      console.log("1 document inserted");
      //sendMail(data);
      console.log(data);
  }
  res.send({status:'OK'});
  });
});

module.exports = router;
