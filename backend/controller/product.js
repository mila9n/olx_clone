import ErrorHandler from "../middleware/errorHandler.js";
import { Product } from "../model/product.js";

// new Product creation
export const newProduct = async (req, res, next) => {
  try {
    const user = req.user;
    const {
      title,
      description,
      price,
      neighbourhood,
      city,
      state,
      email,
      contact,
      images,
    } = req.body;

    if (
      !title ||
      !description ||
      !price ||
      !neighbourhood ||
      !city ||
      !state ||
      !email ||
      !contact ||
      !images
    ) {
      return next(new ErrorHandler("Please enter all the details", 404));
    }

    const formData = {
      title,
      description,
      price,
      neighbourhood,
      city,
      state,
      email,
      contact,
      images,
      user: user._id,
    };

    await Product.create(formData);

    res.status(201).json({
      success: true,
      message: "Ad is live",
    });
  } catch (error) {
    next(error);
  }
};

// All of my products
export const myProduct = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const products = await Product.find({ user: userId });

    if (!products) return next(new ErrorHandler("no product found", 404));

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(error);
  }
};

// Product detail about particular product
export const productDetail = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
};

// update my product detail
export const updateProduct = async (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      neighbourhood,
      city,
      state,
      email,
      contact,
      images,
      productId,
    } = req.body;

    if (
      !title ||
      !description ||
      !price ||
      !neighbourhood ||
      !city ||
      !state ||
      !email ||
      !contact ||
      !images ||
      !productId
    ) {
      return next(new ErrorHandler("Please enter all the details", 404));
    }

    const product = await Product.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    }

    product.set({
      title,
      description,
      price,
      neighbourhood,
      city,
      state,
      email,
      contact,
      images,
    });

    await product.save();

    res.status(200).json({
      status: true,
      message: "Product Updated Successfully!",
    });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
};

// delete my product when not needed
export const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return next(new ErrorHandler("Product Not Found", 404));
    }
    await product.deleteOne();
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
};

// All the product for everyone which will display on home page
export const getAllTheProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) {
      return next(new ErrorHandler("No Products Found, try again", 404));
    }
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    next(
      new ErrorHandler(
        "Something went wrong, please try again after some time",
        404
      )
    );
  }
};

// search Product
export const getSearchedProduct = async (req, res, next) => {
  try {
    const { name } = req.query;
    const items = await Product.find();
    let filteredProducts =
      name != "" &&
      items.filter((item) =>
        item.title
          .split(" ")
          .join("")
          .toLowerCase()
          .includes(name.split(" ").join("").toLowerCase())
      );
    if (!filteredProducts) {
      res.status(400).json({
        success: false,
        message: "No Products Found",
      });
    } else {
      res.status(200).json({
        success: true,
        filteredProducts,
      });
    }
  } catch (error) {
    next(error);
  }
};
