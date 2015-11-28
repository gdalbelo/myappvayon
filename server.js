var express    	= require('express');		// call express
var app        	= express(); 				// define our app using express
var path 	   	= require('path');
var config 	   	= require('./config');

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/www'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/www/index.html'));
});

// START THE SERVER
// ====================================
// start the server
app.listen(config.port);
console.log('Kit API/APP on port ' + config.port);