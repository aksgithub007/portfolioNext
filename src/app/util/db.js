import mongoose from "mongoose";

export const dbConnect = () => {
  return mongoose.connect(process.env.Mongo_URI);
};
