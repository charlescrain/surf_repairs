var RepairArtist = require('./repairArtistModel');
var _ = require('lodash');


exports.params = function(req, res, next, id){
	RepairArtist.findById(id)
		.then(function(repairArtist){
			if(!repairArtist) {
				next(new Error('No repairArtist by that id'))
			} else {
				req.repairArtist = repairArtist;
				next();
			}
		}, function(err) {
			next(err)
		});
};

exports.get = function(req, res, next) {
	RepairArtist.find({})
		.then(function(repairArtists){
			res.json(repairArtists);
		},function (err){
			console.log(err);
			next(err);
		});
};

exports.getOne = function(req, res, next){
	// .params handle DB req with ID
	var repairArtist = req.repairArtist;
	res.json(repairArtist);
};

exports.put = function(req, res, next){
	var repairArtist = req.repairArtist;
	var update = req.body;

	_.merge(repairArtist, update);
	repairArtist.save(function(err){
		if(err){
			next(err);
		}
		res.json(repairArtist);
	});
	//TODO: 8/25/15 Will need to check if password was changed
};

exports.post = function(req, res, next){
	var newRepairArtist = new RepairArtist(req.body);
	newRepairArtist.save(function(err, newRepairArtist){
		if(err){
			console.log('Error on the post brah!');
		}
		res.json(newRepairArtist);
	});
	
};

exports.delete = function(req, res, next){
	//TODO: Need to look up how to remove from MongoDB with Mongoose
	req.repairArtist.remove(function(err, repairArtist){
		if(err){
			next(err);
		}
		res.json(repairArtist);
	});
};