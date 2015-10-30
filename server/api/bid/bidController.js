var Bid = require('./bidModel');
var _ = require('lodash');
var config = require('../../config/config');
var jwt    = require('jsonwebtoken');

exports.getOpen = function( req, res, next ) {
	Bid.find({completed:false})
		.then(function(bids){
			console.log(bids);
			res.json(bids);
		},function (err){
			console.log(err);
			next(err);
		});
}

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
	Bid.findById(id)
		.then(function(bid){
			if(!bid) {
				next(new Error('No bid by that id'))
			} else {
				req.bid = bid;
				next();
			}
		}, function(err) {
			next(err)
		});
};

exports.get = function(req, res, next) {
	Bid.find({owner:req.owner})
		.then(function(bids){
			console.log(bids);
			res.json(bids);
		},function (err){
			console.log(err);
			next(err);
		});
};

exports.getOne = function(req, res, next){
	// .params handle DB req with ID
	var bid = req.bid;
	res.json(bid);
};

exports.put = function(req, res, next){
	var bid = req.bid;
	var update = req.body;
	_.merge(bid, update);

	bid.save(function(err){
		if( err ){
			next( err );
		}

		res.json( bid );
	});
	//TODO: 8/25/15 Will need to check if password was changed
};

exports.post = function( req, res, next ) {
	req.body.owner = req.owner;
	var newBid = new Bid( req.body);
	newBid.save(function( err, newBid ){
		if(err){
			console.log('Error on the post brah!');
		}
		res.json( { success:false, newBid:newBid } );
	} );
};

exports.delete = function( req, res, next ){
	req.bid.remove( function( err, bid ) {
		if( err ){
			next( err );
		}
		res.json( bid );
	} );			
};