// backend/models/Booking.js
const pool = require('../config/db');

const createBooking = async (booking) => {
    const { userId, hotelId, checkIn, checkOut } = booking;
    const res = await pool.query(
        'INSERT INTO bookings (user_id, hotel_id, check_in, check_out) VALUES ($1, $2, $3, $4) RETURNING *',
        [userId, hotelId, checkIn, checkOut]
    );
    return res.rows[0];
};

const getBookingsByUserId = async (userId) => {
    const res = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
    return res.rows;
};

module.exports = { createBooking, getBookingsByUserId };