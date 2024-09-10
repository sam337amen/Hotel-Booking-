// backend/models/Hotel.js
const pool = require('../config/db');

const getHotels = async () => {
    const res = await pool.query('SELECT * FROM hotels');
    return res.rows;
};

const getHotelById = async (id) => {
    const res = await pool.query('SELECT * FROM hotels WHERE id = $1', [id]);
    return res.rows[0];
};

module.exports = { getHotels, getHotelById };