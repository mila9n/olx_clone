import { User } from "../model/user.js";
import ErrorHandler from "../middleware/errorHandler.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

// register new user
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return next(new ErrorHandler("Please fill all the detail", 400));

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, 201, "User Registered Successfully");
  } catch (error) {
    next(error);
  }
};

// user login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new ErrorHandler("Please fill all the field", 400));

    const user = await User.findOne({ email });

    if (!user) return next(new ErrorHandler("Invalid email or password", 400));

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched)
      return next(new ErrorHandler("Invalid email or password", 400));

    sendCookie(user, res, 200, `Welcome back ${user.name}`);
  } catch (error) {
    next(error);
  }
};

// user logout
export const logoutUser = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
};

// profile detail
export const profileDetail = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
