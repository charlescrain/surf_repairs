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
	email: {
		type: String,
		required: true
	}

	//TODO: 8/24/15 Still no authentication so no need for PW
	// password: {
	// 	type: String,
	// 	required: true
	// }
});

module.exports = mongoose.model('surfer', SurferSchema);

