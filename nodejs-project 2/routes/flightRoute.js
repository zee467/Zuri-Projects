const express = require('express');
const router = express.Router();

const {
    getFlight,
    getSpecificFlight,
    bookFlightPostman,
    updateFlight,
    deleteFlight
} = require('../controllers/flightController');

router.get('/', getFlight)
router.get('/:id', getSpecificFlight)
router.post('/', bookFlightPostman)
router.put('/:id', updateFlight)
router.delete('/:id', deleteFlight)

module.exports = router
