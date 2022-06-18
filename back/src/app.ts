import mongoose from 'mongoose'
import express, { Request, Response, NextFunction } from 'express'
import userRouter from './routes/userRouter'

async function main() {
  await mongoose.connect(
    'mongodb+srv:<process.env.DB_USERNAME>:<process.env.DB_PASSWORD>@monster-hunter-api.dcpbt.mongodb.net/?retryWrites=true&w=majority'
  )
}

const app = express()

app.use(express.json())

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
      status: 'Error',
      message: error.message
    })
  }
)

app.use('/users', userRouter)

app.listen('8080', () => {
  console.log('http://localhost:8080')
})
