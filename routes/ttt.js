var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',function(req,res){
    //res.send('GET route on things.');
    //console.log(req.session);
    if(req.session.status == 'online' && req.session.current_user){
        res.sendFile(path.join(__dirname+'/..'+'/html/ttt.html'));
    }else{
        req.session = null;
        res.redirect('/');
    }
})

router.post('/play',jsonParser,function(req,res){
    data = req.body;
    console.log(data);
    move = data.move;
    db.collection('user').find({ 'username': req.session.current_user 
    }).toArray(function(err, result){
        result = result[0];
        gird = result.current_grid;
        json = play(move,gird);
        res.json(json);
    });
});

//export this router to use in our index.js
module.exports = router;