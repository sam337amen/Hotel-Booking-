// backend/controllers/bookingController.js
const { createBooking, getBookingsByUserId } = require('../models/Booking');

const bookRoom = async (req, res) => {
    try {
        const booking = await createBooking(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const userBookings = async (req, res) => {
    try {
        const bookings = await getBookingsByUserId(req.user.id);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { bookRoom, userBookings };