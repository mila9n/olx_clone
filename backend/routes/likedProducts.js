import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  addToLike,
  getLikedProduct,
  removeLikedProduct,
} from "../controller/likedProduct.js";

const router = express.Router();

// adds product to users liked section
router.post("/add", isAuthenticated, addToLike);

// delete particular product from users liked section
router.delete("/delete/:productId", isAuthenticated, removeLikedProduct);

// get liked products
router.get("/get", isAuthenticated, getLikedProduct);
export default router;
