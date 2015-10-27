var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurferSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type:String,
		required: true
	},
	password: {
		type:String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});



module.exports = mongoose.model('surfer', SurferSchema);

