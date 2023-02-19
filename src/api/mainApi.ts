import axios from 'axios';

export const API = () => {
  const api = axios.create({
    baseURL: 'https://api.monobank.ua/',
  });

  return api;
};
