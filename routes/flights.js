var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

/*GET /flights */
router.get('/',flightsCtrl.index);

/* GET /flights/new */
router.get('/new', flightsCtrl.newFlights);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id/ticket',flightsCtrl.addTicket);
router.post('/:id', flightsCtrl.addDestination);
router.delete('/:id', flightsCtrl.deleteFlight);

module.exports = router;