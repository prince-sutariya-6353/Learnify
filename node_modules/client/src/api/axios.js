import axios from 'axios';

// Use relative URLs in production for Vercel deployment
// With Vite, environment variables are accessed via import.meta.env
const baseURL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 