var Destination = require('../models/flight');

module.exports = { 
    create
}



function create(req, res) {
    const destination = new Destination(req.body);
    flight.save(function(err) {
        // handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        //redirect to flight list ('/flights')
        res.redirect('/flights');
    });
}


// function newFlight(req, res) {
//     const newFlight = new Flight();
//     dt = newFlight.departs;
//     const departsDate = dt.toISOString().slice(0,16);
//     res.render('flights/new', {departsDate, title: "Create New Flight"});
// }

// function index(req, res) {
//     Flight.find({}, function(err, flights) {
//         //res.render('flights/index', {});
//         res.render('flights/index', { flights, title: "Flight List" });
//     });
// }