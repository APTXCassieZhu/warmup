var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/..'+'/views/index.html'));
})

router.post('/', function(req, res) {
    data = req.body;
    json = {status:'OK'};
    var db = req.app.locals.db;
    db.collection('user').find({'name': data['name'] 
    }).toArray(function(err, result){
        if(err){
            console.log("log in"+err);
            json.status = 'ERROR';
        }else{
            // make sure that username is unique
	    console.log("result is "+result);
	    console.log(db);
            if(result.length == 1){
                result = result[0];
                // verify the user 
                if(result.password == data.password && result.valid == 'true'){
                    console.log("login success");
                }else{
                    console.log(result.username+'false to login');
                    json.status = 'ERROR'
                }
            }else{
                console.log("error: find "+result.length+" result");
                json.status = 'ERROR';
            }
        }
        res.json(json);
    });
});
//export this router to use in our index.js
module.exports = router;
