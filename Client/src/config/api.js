// API configuration for different environments
const API_URL = {
  development: 'http://localhost:5000',
  production: 'https://learnify-api-backend.vercel.app', // Update with your actual backend URL
};

// Determine the current environment
const environment = import.meta.env.MODE || 'production';

// Export the base URL for API calls
export const BASE_URL = API_URL[environment];

export default {
  auth: {
    signup: `${BASE_URL}/api/auth/signup`,
    login: `${BASE_URL}/api/auth/login`,
    me: `${BASE_URL}/api/auth/me`,
  },
  // Add other API endpoints as needed
}; 