import axios from 'axios';

const API = axios.create({
  baseURL: `https://code-review-ai-server.onrender.com`, // backend endpoint
});

export const getReview = (code) => {
  return API.post('/api/review', { code });
};
