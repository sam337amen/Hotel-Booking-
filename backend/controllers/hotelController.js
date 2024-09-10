// backend/controllers/hotelController.js
const { getHotels, getHotelById } = require('../models/Hotel');

const fetchHotels = async (req, res) => {
    try {
        const hotels = await getHotels();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetchHotelDetails = async (req, res) => {
    try {
        const hotel = await getHotelById(req.params.id);
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { fetchHotels, fetchHotelDetails };