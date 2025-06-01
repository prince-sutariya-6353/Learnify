import axios from 'axios';

// Use relative URLs in production for Vercel deployment
const baseURL = '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 