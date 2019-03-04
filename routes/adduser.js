var express = require('express');
var router = express.Router();
var path = require('path');
const nodemailer = require('nodemailer');

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
  data['current_grid'] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  var db = req.app.locals.db;
  
  // add the new user to mongodb
  db.collection("users").insertOne(data, function(err, result){
    if (err) {
      console.log(err);
      json.status="ERROR";
  }else{
      console.log("1 document inserted");
      sendMail(data);
      console.log(data);
  }
  res.json({status:'OK'});
  });
});

function sendMail(data){
  //console.log("data:" ,data);
  var transporter = nodemailer.createTransport({
      //host: 'email.cloud.compas.cs.stonybrook.edu',
      host:'smtp.gmail.com',
      port:465,
      secure:true,
      auth: {
          user: 'cse356test@gmail.com',
          pass: 'Cse356lalala'
      }
  });
  var mailData = {
      //from:'cse356@email.cloud.compas.cs.stonybrook.edu',
      from: 'cse356test@gmail.com',
      to: data.email,
      subject: "verify code",
      text: "key"+data.key
  };

  transporter.sendMail(mailData, function(error, info){
      if (error) {
        console.log("error is:");
        console.log(error);
      } 
        else{console.log('Email sent: ')}
      });
}

module.exports = router;
