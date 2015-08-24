require('colors');
var _ = require('lodash');

var config = require('../config/config');

//noop (no operation) function for when logging disabled
var noop = function(){};

//Check if console enabled
var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
	log: function() {
		var tag = '[Get Shreddy for some Loggin:]'.green;
		//arguments is an array like object with all the args passed
		//into this function (log).
		var args = _.toArray(arguments)
			.map(function(arg){
				if(typeof arg == 'object'){
					var string = JSON.strinify(arg,null,2);
					return tag + '  ' + string.cyan
				} else {
					return tag + '  ' + arg.cyan;
				}
			});
		consoleLog.apply(console, args);
	},

	error:function(){
		var args = _.toArray(arguments)
			.map(function(arg){
				arg = arg.stack || arg;
				var name = arg.name || '[ XX ERROR XX ]';
				var log = name.yellow + '    ' + arg.red

			});
		consoleLog.apply(console,args);

	}

};