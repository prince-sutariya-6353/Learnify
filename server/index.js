const express = require('express');
const mongoose = require('mongoose'); // ✅ Only declared once
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? [
    'https://learnify.vercel.app',
    'https://learnify-git-main.vercel.app',
    /\.vercel\.app$/
  ] : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ✅ Routes
app.use('/api/auth', authRoutes);

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).send('OK');
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export for Vercel serverless function
module.exports = app;
