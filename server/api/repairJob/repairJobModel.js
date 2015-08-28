var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepairJobSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	completed:{
		type:Boolean,
		required:true
	},
	boardDimensions:{
		length: {
			type:String,
			required:true
		},
		width:{
			type:String
		},
		thickness:{
			type:String
		},
		volume:{
			type:String
		}
	},
	// pictures:{

	// 	 type:[String], validate: [pictureLimit, 'Only 6 pictures can be stored per job'],
	// 	 required:true
	// },
	// owner:{
	// 	type: Schema.Types.ObjectId, ref:'Surfer',
	// 	required:true
	// }

	//TODO: 8/28/15 Need Bid Schema setup
	//currentBids:{}
});

function pictureLimit(val){
	return val.length <= 6;
}

module.exports = mongoose.model('repairJob', RepairJobSchema);