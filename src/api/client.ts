import axios from 'axios';

const API_URL = "https://strapi-sznurkowe.onrender.com/"

const clientApi = axios.create({
  baseURL: API_URL,
  //   withCredentials: true,
//   headers: {
//     Authorization: `Bearer ${apiToken}`,
//   },
});

export const api = clientApi;

