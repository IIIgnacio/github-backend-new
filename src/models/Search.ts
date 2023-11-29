import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
  searchName: {
    type: String,
    required: true,
  },
  result: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Relaciona con el modelo de usuario
  },
  date: String,
});

export const Search = mongoose.model('Search', searchSchema);
