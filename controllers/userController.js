const User = require('../models/User');

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract user from JWT

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract user from JWT
    const { username, email } = req.body;

    const user = await User.findByIdAndUpdate(userId, { username, email }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User profile updated successfully', user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract user from JWT

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getUserProfile, updateUserProfile, deleteUserAccount };
