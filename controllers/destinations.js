var Flight = require('../models/flight');

module.exports = { 
    create
}

function create(req, res) {
   //find flight info first
    Flight.findById(req.params.id, function(err, flight) {
        //then push the info collected from the form into destinations array in the flight
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${req.params.id}`);
                            // could also use flight._id
        }) 
    })
   
}


