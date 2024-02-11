import { api } from './client';

const API_URL = "https://strapi-sznurkowe.onrender.com/"

export const getCategories = async () => {
  const res = await api.get(`/api/categories`);
  return res.data.data;
};

// export const getProducts = async () => {
//   const res = await api.get(`/api/products`);
//   return res.data.data;
// };

export const getProducts = async () => {
  const res = await fetch(`${API_URL}api/products`);
  return res.json();
};

export const getProductsList = async () => {
  const res = await api.get(`/api/products?populate=thumbnail`);
  return res.data.data;
};

export const getProductsDetails = async () => {
  const res = await api.get(`/api/products?populate=gallery`);
  return res.data.data;
};