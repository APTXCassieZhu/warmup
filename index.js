var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//app.get('/', function(req, res){
router.get('/addUser', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
    
    // Check Error
    var err = req.validationErrors();
    if(err){
      res.render('addUser', {errors: err})
    }
});

app.post('/login', function(req, res){
	var name = req.body.name;
  res.send('Hi, '+name);

  // Check Error
  var err = req.validationErrors();
  if(err){
    res.render('')
  }

});

router.get('/ttt/', function(req, res){
     res.sendFile(path.join(__dirname+'/views/ttt/in.html'));
});



app.use('/', router);

app.listen(80);
module.exports = router;
