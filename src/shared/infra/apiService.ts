import axios from 'axios';

export const apiService = axios.create({
  baseURL: '/api', //no need for domain as it will be the same as the frontend
});
