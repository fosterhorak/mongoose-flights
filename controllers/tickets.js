var Flight = require('../models/flight');
var Ticket = require('../models/ticket');
const { render } = require('../server');

module.exports = { 
    create,
    new: newTicket
}

function create(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    req.body.flight = req.params.id;

    const ticket = new Ticket(req.body);
    ticket.save(function(err) {
       //redirect to show page
       res.redirect(`/flights/${req.params.id}`);

   })
    
   
}

function newTicket(req, res) {
    res.render('tickets/new', {id: req.params.id, title: "YOLO SWAG"})
}


//flights

// function create(req, res) {
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//         // handle errors
//         if (err) return res.render('flights/new');
//         console.log(flight);
//         //redirect to flight list ('/flights')
//         res.redirect('/flights');
//     });
// }


// //destinations...

// function create(req, res) {
//     //find flight info first
//      Flight.findById(req.params.id, function(err, flight) {
//          flight.destinations.push(req.body);
//          flight.save(function(err) {
//              res.redirect(`/flights/${req.params.id}`);
//                              // could also use flight._id
//          }) 
//      })
    
//  }
 