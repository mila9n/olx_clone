import express from "express";
import {
  loginUser,
  logoutUser,
  profileDetail,
  registerUser,
} from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// register new user route
router.post("/register", registerUser);

// login route
router.post("/login", loginUser);

// logout route
router.get("/logout", logoutUser);

// profile detail route
router.get("/me", isAuthenticated, profileDetail);

export default router;
