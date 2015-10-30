var router = require('express').Router();

// api router mounts other routers to the correct url

router.use('/surfers',require('./surfer/surferRoutes'));
router.use('/repair-jobs',require('./repairJob/repairJobRoutes'));
router.use('/repair-artists',require('./repairArtist/repairArtistRoutes'));
router.use('/bids',require('./bid/bidRoutes'));

module.exports = router;