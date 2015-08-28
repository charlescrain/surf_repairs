var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');

console.log('Config: ');
console.log(config);
require('mongoose').connect(config.db.url);

//TODO: 8/23/15 Seed is always disabled, need to set it up still
if(config.seed){
	require('./util/seed');
}

//setup app middlewar
require('./middleware/appMiddleware')(app);

//setup api
app.use('/api', api);

//TODO: 8/23/15 authentication not setup
//app.use('/auth', auth);

//Global Error Handling

app.use(function(err,req,res,next){
	//TODO: 8/23/15 This is for when auth is set up
	if(err.name === 'UnathorizedError'){
		res.status(401).send('Invalid token');
		return;
	}

	logger.error(err.stack);
	res.status(500).send('Oh NO!');
});

module.exports = app;