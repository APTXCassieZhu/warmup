var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

//app.get('/', function(req, res){
router.get('/', function(req, res){
     res.sendFile(path.join(__dirname+'/index.html'));
     //res.render('index', {title: 'Express'});
});

router.get('/login', function(req, res){
	var name = req.body.name;
	res.send('Hi, '+name);
});

router.get('/ttt/', function(req, res){
     res.sendFile(path.join(__dirname+'/views/ttt/in.html'));
});



app.use('/', router);

app.listen(80);
module.exports = router;
