const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://princegithub6353:kO831leVmWEy573n@learnify.umsrqrf.mongodb.net/?retryWrites=true&w=majority&appName=Learnify";

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'https://learnify-client.vercel.app', 'https://learnify-bg8a.vercel.app'],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'X-Api-Version']
};

// Handle OPTIONS preflight requests
app.options('*', cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());

// Add CORS headers manually to all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://learnify-bg8a.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  next();
});

// Import routes
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/auth', authRoutes);

// Example route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Handle 404 - Keep this as the last route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
