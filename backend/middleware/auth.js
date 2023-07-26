import { User } from "../model/user.js";
import ErrorHandler from "./errorHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return next(new ErrorHandler("Login First", 404));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.tokenId);
    next();
  } catch (error) {
    next(error);
  }
};
