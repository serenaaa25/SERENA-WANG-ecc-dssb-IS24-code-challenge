import axios from "axios";

const url = "http://localhost:3000/api/products";
const API = axios.create({ baseURL: "http://localhost:3000/api/products" });

export const fetchProducts = () => axios.get(url);

export const createProduct = (newProduct) => axios.post(url, newProduct);

export const updateProduct = (id, updatedProduct) =>
  axios.patch(`${url}/${id}`, updatedProduct);

export const deleteProduct = (id) => axios.delete(`${url}/${id}`);

// export const fetchProductsBySearch = (searchQuery) =>
//   axios.get(
//     `${url}/search?searchQuery=${searchQuery.search || "none"}&developers=${
//       searchQuery.developers
//     }`
//   );

export const fetchProductsBySearch = (searchQuery) =>
  API.get(
    `/search?searchQuery=${searchQuery.search || "none"}&developers=${
      searchQuery.developers
    }`
  );
