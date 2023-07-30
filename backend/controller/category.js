import { Product } from "../model/product.js";
import ErrorHandler from "../middleware/errorHandler.js";

// get product according to category
export const getProductByCategory = async (req, res, next) => {
  const { categoryName } = req.params;
  try {
    let products = await Product.find({ category: categoryName });
    if (!products) {
      return next(new ErrorHandler("No Product Available", 404));
    }

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(new ErrorHandler("Something went wrong, please try again later", 404));
  }
};
