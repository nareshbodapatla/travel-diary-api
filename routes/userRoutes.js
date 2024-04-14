const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, deleteUserAccount } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Route: GET /api/user/profile
// Description: Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Route: PUT /api/user/profile
// Description: Update user profile
router.put('/profile', authMiddleware, updateUserProfile);

// Route: DELETE /api/user/profile
// Description: Delete user account
router.delete('/profile', authMiddleware, deleteUserAccount);

module.exports = router;
