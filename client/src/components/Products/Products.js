import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <h1>Products</h1>
      <Product />
      <Product />
    </>
  );
};

export default Products;
