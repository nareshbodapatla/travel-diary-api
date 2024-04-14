const { body, validationResult } = require('express-validator');

// Validation middleware for user registration
exports.validateRegistration = [
  body('username', 'Username is required').notEmpty(),
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation middleware for user login
exports.validateLogin = [
  body('email', 'Invalid email').isEmail(),
  body('password', 'Password is required').notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
