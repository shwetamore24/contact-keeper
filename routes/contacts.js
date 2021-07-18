const express = require('express');
const router = express.Router();

// @route   GET    /api/contacts
// @desc    Get user contact
// @access  Private
router.get('/', (req, res) => {
  res.send('Get a user contact');
});

// @route   POST    /contacts
// @desc    Add a user contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a user contact');
});

// @route   PUT    /api/contacts/:id
// @desc    Update a user contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update user contact with id');
});

// @route   DELETE    /api/contacts/:id
// @desc    Delete a user contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete user contact with id: ', req.params.id);
});

module.exports = router;
