var RepairJob = require('./repairJobModel');
var _ = require('lodash');
var config = require('../../config/config');
var jwt    = require('jsonwebtoken');

exports.verifyToken = function( req, res, next ) {
	if ( req.cookies.token ) {
		jwt.verify( req.cookies.token, config.secret, function( err, result ) {
			if ( err ) {
				res.statusCode = 401;
				res.json( { success:false, message:"error on verify" } );
			} else {
				req.owner = result._id;
				next();
			}
		});
	} else {
		res.statusCode = 401;
		res.json( { success:false, message:"cookie expired" } );
	}
}


exports.params = function(req, res, next, id){
	RepairJob.findById(id)
		.then(function(repairJob){
			if(!repairJob) {
				next(new Error('No repairJob by that id'))
			} else {
				req.repairJob = repairJob;
				next();
			}
		}, function(err) {
			next(err)
		});
};

exports.get = function(req, res, next) {
	RepairJob.find({owner:req.owner})
		.then(function(repairJobs){
			console.log(repairJobs);
			res.json(repairJobs);
		},function (err){
			console.log(err);
			next(err);
		});
};

exports.getOne = function(req, res, next){
	// .params handle DB req with ID
	var repairJob = req.repairJob;
	res.json(repairJob);
};

exports.put = function(req, res, next){
	var repairJob = req.repairJob;
	var update = req.body;
	_.merge(repairJob, update);

	//Arrays are not flagged as changed by Mongoose need to do so manually
	repairJob.markModified('pictures');
	repairJob.save(function(err){
		if( err ){
			next( err );
		}

		res.json( repairJob );
	});
	//TODO: 8/25/15 Will need to check if password was changed
};

exports.post = function( req, res, next ) {
	req.body.owner = req.owner;
	var newRepairJob = new RepairJob( req.body);
	newRepairJob.save(function( err, newRepairJob ){
		if(err){
			console.log('Error on the post brah!');
		}
		res.json( { success:false, newJob:newRepairJob } );
	} );
};

exports.delete = function( req, res, next ){
	req.repairJob.remove( function( err, repairJob ) {
		if( err ){
			next( err );
		}
		res.json( repairJob );
	} );			
};