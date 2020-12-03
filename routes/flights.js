const express = require('express');
//const flights = require('../controllers/flights');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// ***add isLoggedIn = require('../config/auth');


// GET /flights
router.get('/', flightsCtrl.index);

// GET /fights/new
router.get('/new', flightsCtrl.new);

// GET /flights/:id
router.get('/:id', flightsCtrl.show);

// POST /flights
router.post('/', flightsCtrl.create);



module.exports = router;
