var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairArtistSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	username:{
		type:String,
		required:true
	},
	email: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('repairArtist', RepairArtistSchema);