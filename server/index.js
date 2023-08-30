const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/solidjs-admin-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware setup
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
