const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Generate random JWT secret
const jwtSecret = crypto.randomBytes(32).toString('hex');

// Create .env file content
const envContent = `PORT=5000
MONGODB_URI=mongodb+srv://princegithub6353:<db_password>@learnify.znqp392.mongodb.net/?retryWrites=true&w=majority&appName=Learnify
DB_PASSWORD=iCUfukzJzEaDPdjO
JWT_SECRET=${jwtSecret}`;

// Write to .env file
fs.writeFileSync(path.join(__dirname, '.env'), envContent);

console.log('.env file created successfully!');
console.log('MongoDB connection and JWT secret configured.'); 