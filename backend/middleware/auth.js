// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(403);
    
    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
};

module.exports = { authenticate };