import express from 'express'
import { connectDB } from './src/mongoDB/mongoConnection'
import mainRouter from './src/routes/users.routes'

const PORT = process.env.PORT || 5000

const app = express()
connectDB()

app.use(express.json())

app.use(mainRouter)

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})
