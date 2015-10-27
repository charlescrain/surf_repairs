var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser')




//setup global middleware here
module.exports = function(app){
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(cookieParser());
	// app.use(passport.initialize());
 //  	app.use(passport.session());
};