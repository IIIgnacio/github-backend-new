import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      login: {
        type: String,
        required: true,
      },
      followers: {
        type: Number,
        required: true,
      },
      public_repos: {
        type: Number,
        required: true,
      },
});

export const UserModel = mongoose.model("User", userSchema )
