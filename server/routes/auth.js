const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  // Registration logic
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  // Login logic
});

router.post('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

module.exports = router;
