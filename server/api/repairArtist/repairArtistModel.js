var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairArtistSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	username:{
		type:String,
		unique:true,
		required:true
	},
	password: {
		type:String,
		required: true
	},
	email: {
		type: String,
		unique:true,
		required: true
	}

});

module.exports = mongoose.model('repairArtist', RepairArtistSchema);