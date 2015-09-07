var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./surferController');


router.param('id', controller.params);

router.route('/')
	.get(controller.get)
	.post(controller.post)

router.route('/:id')
	.get(controller.getOne)
	.put(controller.put)
	.delete(controller.delete)

router.route('/login')
	.post(controller.login)


module.exports = router;