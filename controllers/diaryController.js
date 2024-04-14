const DiaryEntry = require('../models/DiaryEntry');

const createEntry = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user._id; // Assuming you have middleware to extract user from JWT

    const diaryEntry = new DiaryEntry({
      title,
      content,
      user: userId
    });

    await diaryEntry.save();

    res.status(201).json({ message: 'Diary entry created successfully', diaryEntry });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getEntries = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract user from JWT

    const entries = await DiaryEntry.find({ user: userId });

    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const entry = await DiaryEntry.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!entry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }

    res.json({ message: 'Diary entry updated successfully', entry });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await DiaryEntry.findByIdAndDelete(id);

    if (!entry) {
      return res.status(404).json({ message: 'Diary entry not found' });
    }

    res.json({ message: 'Diary entry deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createEntry, getEntries, updateEntry, deleteEntry };
