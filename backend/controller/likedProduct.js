import ErrorHandler from "../middleware/errorHandler.js";
import { LikedProduct } from "../model/likedProducts.js";

// adds item to liked product list
export const addToLike = async (req, res, next) => {
  try {
    const user = req.user;
    const { productId, title, image, price } = req.body;

    let isUser = await LikedProduct.findOne({ user: user._id });
    if (!isUser) {
      if (!productId || !title || !image || !price) {
        return next(new ErrorHandler("Please select product", 404));
      }
      const productData = {
        user,
        products: [
          {
            title,
            image,
            price,
            productId,
          },
        ],
      };

      await LikedProduct.create(productData);
    } else {
      const productsList = isUser.products;
      const isExist = () => {
        for (let i = 0; i < productsList.length; i++) {
          if (productsList[i].productId == productId) {
            return true;
          }
        }
      };
      if (isExist()) {
        return next(
          new ErrorHandler("Product Is Already In Your Liked List", 400)
        );
      } else {
        isUser.products.push({
          productId,
          title,
          price,
          image,
        });
        await isUser.save();
      }
    }
    res.status(201).json({
      success: true,
      message: "Added to liked products",
    });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
};

// removes item from liked list
export const removeLikedProduct = async (req, res, next) => {
  try {
    const user = req.user;
    const { productId } = req.params;

    let isUser = await LikedProduct.findOne({ user: user._id });

    if (!isUser) {
      return next(new ErrorHandler("Login first", 404));
    }

    let products = isUser.products;

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId == productId) {
        isUser.products.splice(i, 1);
        break;
      }
    }
    await isUser.save();

    res.status(200).json({
      status: true,
      message: "Product removed from list",
    });
  } catch (error) {
    next(error);
  }
};

// gets all the item of user
export const getLikedProduct = async (req, res, next) => {
  try {
    const user = req.user;

    const likedItem = await LikedProduct.findOne({ user: user._id });
    if (!likedItem) {
      return next(new ErrorHandler("No liked Items", 404));
    }

    res.status(200).json({
      status: true,
      likedItem,
    });
  } catch (error) {
    next(error);
  }
};
