import express from "express";

import {
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
