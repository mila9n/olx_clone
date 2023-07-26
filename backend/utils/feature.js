import jwt from "jsonwebtoken";

export const sendCookie = (user, res, statusCode = 201, message) => {
  const token = jwt.sign({ tokenId: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: message,
      user: user.name,
    });
};
