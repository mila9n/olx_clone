import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/errorHandler.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import uploadRoute from "./routes/upload.js";
import likedProductRoute from "./routes/likedProducts.js";
import productCategoryRoute from "./routes/category.js";
import colors from "colors";
import cors from "cors";
dotenv.config({});

const app = express();

connectDb();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./uploads"));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/likedProduct", likedProductRoute);
app.use("/api/v1/productCategory", productCategoryRoute);

// error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
