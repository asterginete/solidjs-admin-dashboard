const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  // Fetch all users
});

router.post('/', async (req, res) => {
  // Create a new user
});

router.put('/:id', async (req, res) => {
  // Update a user
});

router.delete('/:id', async (req, res) => {
  // Delete a user
});

module.exports = router;
