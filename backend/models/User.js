// backend/models/User.js
const pool = require('../config/db');

const createUser = async (user) => {
    const { name, email, password } = user;
    const res = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
    );
    return res.rows[0];
};

const findUserByEmail = async (email) => {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0];
};

module.exports = { createUser, findUserByEmail };