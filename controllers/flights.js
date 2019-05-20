var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    deleteFlight
};

function deleteFlight(req, res) {
    console.log(req.params.id)
    Flight.findByIdAndDelete(req.params.id,  err => console.log(err))
    // .then(result => console.log(result))
    // .catch(error => console.log(error));
    res.redirect('/flights');
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {airline: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    console.log(req)
    res.render('flights/new');
}


function create(req, res) {
    console.log(req)
    var flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      console.log(flight);
      // res.redirect('/flights');
      res.redirect(`/flights`);
    });
  }

  function show(req, res) {
      //find by ID req.params
      Flight.findById(req.params.id, function(err, flight) {
        if(err) return res.redirect('/flights');
        res.render('flights/show', {flight
        });

      });

  }


  