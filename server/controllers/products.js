import ProductDetail from "../models/productDetail.js";

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
