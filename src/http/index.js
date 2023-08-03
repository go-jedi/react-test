import axios from 'axios';

export const API_URL = 'https://64c41c8667cfdca3b660a1b2.mockapi.io/';

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
