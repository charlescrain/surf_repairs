var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./bidController');

//Authenticated Routes
router.use(controller.verifyToken);
router.param('id', controller.params);

router.route('/')
	.get(controller.get)
	.post(controller.post)

router.route('/:id')
	.get(controller.getOne)
	.put(controller.put)
	.delete(controller.delete)

router.route('by-job')
	.get(controller.getByJob)

module.exports = router;