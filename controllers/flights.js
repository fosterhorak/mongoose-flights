var Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight, 
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        //res.render('flights/index', {});
        res.render('flights/index', { flights, title: "Flight List" });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { flight, title: 'Flight Details' });
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
    
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0,16);
    console.log(departsDate);
    res.render('flights/new', {departsDate, title: "Create A New Flight"});
}

