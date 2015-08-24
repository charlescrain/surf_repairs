var router = require('express').Router();

// api router mounts other routers to the correct url

router.use('/surfers','./surfer/surferRoutes');
//router.use('/repair-jobs','./repairJob/repairJobRoutes');
//router.use('./repair-artist','./repairArtist/repairArtistRoutes');

module.exports = router;