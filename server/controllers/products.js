import ProductDetail from "../models/productDetail.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  //   res.send("working!!");
  try {
    const productDetail = await ProductDetail.find();
    console.log(productDetail);
    res.status(200).json(productDetail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  //   res.send("New Product creation");
  const product = req.body;
  const newProduct = new ProductDetail(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    productOwnerName,
    developers,
    scrumMasterName,
    startDate,
    methodology,
    location,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No product with that id: ${id}`);

  const updatedProduct = {
    productName,
    productOwnerName,
    developers,
    scrumMasterName,
    startDate,
    methodology,
    location,
    _id: id,
  };

  await ProductDetail.findByIdAndUpdate(id, updatedProduct, { new: true });

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ProductDetail.findByIdAndRemove(id);

  res.json({ message: "Product deleted successfully." });
};
