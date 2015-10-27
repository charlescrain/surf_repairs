var Surfer = require('./surferModel');
var _ = require('lodash');
var bCrypt = require('bcrypt-nodejs');
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;


// passport.use(new LocalStrategy(
// 	function(username, password, done) {
// 		Surfer.findOne({ username: username }, function(err, surfer) {
// 			if (err) { return done(err); }
// 			if (!surfer) {
// 				return done(null, false, { message: 'Incorrect username.' });
// 			}
// 			if (!surfer.validPassword(password)) {
// 				return done(null, false, { message: 'Incorrect password.' });
// 			}
// 			console.log(surfer);
// 			return done(null, surfer);
// 		});
// 	}
// ));

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
	bCrypt.genSalt(10, function(error, salt){
		bCrypt.hash(newSurfer.password,salt, function(){}, function(error,hash){
			console.log(hash,error);
			if(error){
				console.log('Error in the hash');
				// next(error);
			}
			newSurfer.password = hash;
			newSurfer.save(function(err, newSurfer){
				if(err){
					console.log('Error on the post brah!');
					// next(err);
				}
				res.json(newSurfer);
			});
		})
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
	console.log(req.body.username);
	Surfer.findOne({username:req.body.username})
		.then(function(surfer){
			console.log(surfer);
			bCrypt.compare(req.body.password, surfer.password, function(error, result){
				if(error){
					console.log(error);
					next(error);
				}
				if(result){
					res.json('Success');
				}else{
					res.sendStatus(401);
				}
			});

			// if(!surfer.validPassword(req.body.password)){
			// 	res.sendStatus(401);
			// }else{
			// 	console.log('yay',surfer)
			// 	res.json(surfer);
			// }
		}, function(err){
			next(err);
		});
};
// exports.login = passport.authenticate('local',function(req,res){
// 	console.log(res);

