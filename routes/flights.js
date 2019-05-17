var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);

// router.get('/:id', moviesCtrl.show);
// router.post('/', moviesCtrl.create);


module.exports = router;