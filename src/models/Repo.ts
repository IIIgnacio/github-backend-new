import mongoose, { Schema } from "mongoose";

const repoSchema = new mongoose.Schema({
    searchRepo: {
        type: String,
        required: true,
    },
    result: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Relaciona con el modelo de usuario
    },
    date: String,
  });

const Repo = mongoose.model('Repo', repoSchema)