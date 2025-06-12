import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // backend endpoint
});

export const getReview = (code) => {
  return API.post('/api/review', { code });
};
