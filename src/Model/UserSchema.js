import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  exp: {
    type: String,
    require: true,
  },
  facebook: {
    type: String,
    require: true,
  },
  twitter: {
    type: String,
    require: true,
  },
  linkedin: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
});

// export const User = mongoose.model("user", UserSchema);
export const User = mongoose.models.User || mongoose.model("user", UserSchema);
