import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, default: null, unique: true },
  password: { type: String, default: null },
});

mongoose.models = {};

const User = mongoose.model("User", usersSchema);

module.exports = User;
