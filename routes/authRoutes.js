const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Route: POST /api/auth/register
// Description: Register a new user
router.post('/register', register);

// Route: POST /api/auth/login
// Description: User login
router.post('/login', login);

module.exports = router;
