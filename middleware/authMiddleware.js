const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  // Extract token from request headers
  const token = req.header('Authorization');

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user associated with token
    const user = await User.findById(decoded.userId);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Authorization denied. Invalid token' });
    }

    // Attach user to request object
    req.user = user;

    // Call next middleware
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: 'Authorization denied. Invalid token' });
  }
};

module.exports = authMiddleware;
