var express  = require('express'),
	app 	 = express(),
	mongoose = require('mongoose')
	morgan	 = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	routes = require('./routes/index')

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))        
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())
app.use('/', routes)
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(8080,function(){
	console.log("App listening on port 8080")
})
