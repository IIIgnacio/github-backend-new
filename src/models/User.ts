import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    public_repos: {
        type: String,
        required: true,
      },
});

const User = mongoose.model("User", userSchema )

export { User, userSchema };