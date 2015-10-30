var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BidSchema = new Schema({
	cost:{
		type:Number,
		required:true
	},
	closed:{
		type:Boolean,
		required:true
	},
	owner:{
		type:Schema.Types.ObjectId, ref:'RepairArtist',
		required:true
	},
	job:{
		type:Schema.Types.ObjectId, ref:'RepairJob',
		required:true
	}
});

module.exports = mongoose.model('bid', BidSchema);