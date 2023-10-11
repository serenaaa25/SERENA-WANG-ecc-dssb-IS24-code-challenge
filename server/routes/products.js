import express from "express";

import { getProducts, createProducts, updateProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.patch("/:id", updateProduct);

export default router;
