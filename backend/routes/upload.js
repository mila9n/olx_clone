import express from "express";
import { uploadPhoto } from "../controller/upload.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `product-${Date.now()}--${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

// photos name should be same when uploading files
router.post("/photoUpload", upload.array("photos", 14), uploadPhoto);

export default router;
