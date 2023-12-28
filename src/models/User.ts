import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  avatar_url: {
    type: String,
    required: true,
  },
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
  publicRepos: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  

})

export const UserModel = mongoose.model('User', userSchema)
