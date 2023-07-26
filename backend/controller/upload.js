import ErrorHandler from "../middleware/errorHandler.js";

export const uploadPhoto = async (req, res, next) => {
  try {
    const files = req.files;
    if (!files) {
      next(new ErrorHandler("No files found", 404));
    }
    const fileNames = files.map((file) => {
      return file.filename;
    });
    res.status(200).json({
      success: true,
      fileNames,
    });
  } catch (error) {
    next(error);
  }
};
