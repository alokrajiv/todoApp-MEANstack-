var express = require('express'),
	router = express.Router(),
	db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World")
});


function db_check(){
	var data = {
        text : "Alok",
        done : false
    }
	db.todoModel.create(data,function(err, todo){
	    if (err)
	        res.send(err);
	    console.log(todo)
	})
}
db_check()

module.exports = router;