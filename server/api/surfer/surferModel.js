var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurferSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type:String,
		unique:true,
		required: true
	},
	password: {
		type:String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique:true
	}
});



module.exports = mongoose.model('surfer', SurferSchema);

