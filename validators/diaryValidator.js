const { body, validationResult } = require('express-validator');

// Validation middleware for creating a diary entry
exports.validateCreateEntry = [
  body('title', 'Title is required').notEmpty(),
  body('content', 'Content is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation middleware for updating a diary entry
exports.validateUpdateEntry = [
  body('title', 'Title is required').notEmpty(),
  body('content', 'Content is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
