import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const URL = process.env.URL || ''

export const connectDB = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((error: any) => {
      console.error('Error connecting to MongoDB:', error)
    })
}
