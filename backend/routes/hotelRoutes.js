// backend/routes/hotelRoutes.js
const express = require('express');
const { fetchHotels, fetchHotelDetails } = require('../controllers/hotelController');
const router = express.Router();

router.get('/hotels', fetchHotels);
router.get('/hotels/:id', fetchHotelDetails);

module.exports = router;