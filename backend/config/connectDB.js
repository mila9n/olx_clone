import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, { dbName: "olxclone" })
    .then((c) =>
      console.log(`Database is connected: ${c.connection.host}`.underline.cyan)
    )
    .catch((e) => {
      console.log(e);
    });
};
