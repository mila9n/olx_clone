import { Product } from "../model/product.js";
import ErrorHandler from "../middleware/errorHandler.js";

export const getPaginatedProducts = async (req, res, next) => {
  try {
    const { page } = req.query;
    const data = await Product.find().sort({ createdAt: -1 });
    if (!data) {
      return next(new ErrorHandler("Something went wrong", 404));
    }

    if (data.length == page) {
      return next(new ErrorHandler("NO product available", 404));
    }

    let limit = 6;
    let startInd = parseInt(0);
    let endInd = parseInt(page * limit);

    let newData = data.slice(startInd, endInd);
    res.status(200).json({
      success: true,
      isLast: endInd >= data.length ? true : false,
      product: newData,
    });
  } catch (error) {
    next(new ErrorHandler("Something went wrong, try again later", 404));
  }
};
