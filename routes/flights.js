const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);

// GET /fights/new. 
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);



module.exports = router;
