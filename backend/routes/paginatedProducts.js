import express from "express";
import { getPaginatedProducts } from "../controller/paginatedProducts.js";

const router = express.Router();

router.get("/", getPaginatedProducts);

export default router;
