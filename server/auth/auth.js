var express = require('express');
var router = express.Router();
var Surfer = require('../api/surfer/surferModel');
var RepairArtist = require('../api/repairArtist/repairArtistModel');
var config = require('../config/config');
var _ = require('lodash');
var bCrypt = require('bcrypt-nodejs');
var jwt    = require('jsonwebtoken');

router.post('/surfers', function(req, res, next){
	Surfer.findOne({username:req.body.username})
		.then(function(surfer){
			console.log(surfer, req.body);
			bCrypt.compare(req.body.password, surfer.password, function(error, result){
				if(error){
					console.log(error);
					next(error);
				}
				if(result){
					var token = jwt.sign(surfer, config.secret, {
						expiresIn:60,
					});
					console.log(res.cookie);
					res.cookie('token',token , {maxAge:100000});
					res.cookie('userType', 'surfer', { maxAge:100000 });
					res.json({success:true, token:token});
				}else{
					res.json({succes:false});
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
});

router.post('/repair-artists', function(req, res, next){
	RepairArtist.findOne({username:req.body.username})
		.then(function(repairArtist){
			console.log(repairArtist, req.body);
			bCrypt.compare(req.body.password, repairArtist.password, function(error, result){
				if(error){
					console.log(error);
					next(error);
				}
				if(result){
					var token = jwt.sign(repairArtist, config.secret, {
						expiresIn:60,
					});
					console.log(res.cookie);
					res.cookie('token',token , {maxAge:100000});
					res.cookie('userType', 'repair-artist', { maxAge:100000 });
					res.json({success:true, token:token});
				}else{
					res.json({succes:false});
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
});

module.exports = router;