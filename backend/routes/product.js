import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  deleteProduct,
  getSearchedProduct,
  myProduct,
  newProduct,
  productDetail,
  updateProduct,
} from "../controller/product.js";

const router = express.Router();

// for new product
router.post("/newproduct", isAuthenticated, newProduct);

// for my products
router.get("/myProduct", isAuthenticated, myProduct);

//to update my product detail
router.put("/updateProduct", isAuthenticated, updateProduct);

// to delete any of my product
router.delete("/deleteProduct/:productId", isAuthenticated, deleteProduct);

// to get searched product
router.get("/", getSearchedProduct);

// to get product detail of particular product
router.get("/:productId", productDetail);

export default router;
