import axios from "axios";

const url = "http://localhost:3000/api/products";

export const fetchProducts = () => axios.get(url);

export const createProduct = (newProduct) => axios.post(url, newProduct);
