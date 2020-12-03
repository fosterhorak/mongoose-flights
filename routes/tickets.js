const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');
const ticket = require('../models/ticket');


// POST to /flights/:id/tickets
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);



module.exports = router;
