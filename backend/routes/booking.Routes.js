// backend/routes/bookingRoutes.js
const express = require('express');
const { bookRoom, userBookings } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/book', authenticate, bookRoom);
router.get('/bookings', authenticate, userBookings);

module.exports = router;