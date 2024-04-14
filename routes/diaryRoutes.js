const express = require('express');
const router = express.Router();
const { createEntry, getEntries, updateEntry, deleteEntry } = require('../controllers/diaryController');
const authMiddleware = require('../middleware/authMiddleware');

// Route: POST /api/diary/entries
// Description: Create a new diary entry
router.post('/entries', authMiddleware, createEntry);

// Route: GET /api/diary/entries
// Description: Get all diary entries
router.get('/entries', authMiddleware, getEntries);

// Route: PUT /api/diary/entries/:id
// Description: Update a diary entry
router.put('/entries/:id', authMiddleware, updateEntry);

// Route: DELETE /api/diary/entries/:id
// Description: Delete a diary entry
router.delete('/entries/:id', authMiddleware, deleteEntry);

module.exports = router;
