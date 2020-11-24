var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight, 
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        //res.render('flights/index', {});
        res.render('flights/index', { flights, title: "Flight List" });
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        //redirect to flight list ('/flights')
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: "Create New Flight"});
}

