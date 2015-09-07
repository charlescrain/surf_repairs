var Surfer = require('./surferModel');
var _ = require('lodash');

//TODO: 8/23/15 Auth not happening as of yet
//var signToken = require('../../auth/auth').signToken;

exports.params = function(req, res, next, id){
	Surfer.findById(id)
		.then(function(surfer){
			if(!surfer) {
				next(new Error('No surfer by that id'))
			} else {
				req.surfer = surfer;
				next();
			}
		}, function(err) {
			next(err)
		});
};

exports.get = function(req, res, next) {
	Surfer.find({})
		.then(function(surfers){
			res.json(surfers);
		},function (err){
			console.log(err);
			next(err);
		});
};

exports.getOne = function(req, res, next){
	// .params handle DB req with ID
	var surfer = req.surfer;
	res.json(surfer);
};

exports.put = function(req, res, next){
	var surfer = req.surfer;
	var update = req.body;

	_.merge(surfer, update);
	surfer.save(function(err){
		if(err){
			next(err);
		}
		res.json(surfer);
	});
	//TODO: 8/25/15 Will need to check if password was changed
};

exports.post = function(req, res, next){
	var newSurfer = new Surfer(req.body);
	newSurfer.save(function(err, newSurfer){
		if(err){
			console.log('Error on the post brah!');
		}
		res.json(newSurfer);
	});
	
};

exports.delete = function(req, res, next){
	req.surfer.remove(function(err, surfer){
		if(err){
			next(err);
		}
		res.json(surfer);
	});
};

exports.login = function(req, res, next){
	console.log('trying to log in');
	console.log(req.body);
	Surfer.findOne(req.body)
		.then(function(surfer){
			// if(surfer.password == req.body.password){
			// 	res.json(surfer);
			// }
			res.json(surfer);
		}, function(err){
			next(err);
		});
};