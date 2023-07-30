import express from "express";
import { getProductByCategory } from "../controller/category.js";

const router = express.Router();

router.get("/:categoryName", getProductByCategory);

export default router;
