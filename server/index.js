import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/users.js'
import commentRoutes from './routes/comments.js'
import videoRoutes from './routes/videos.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 8000
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {app.listen(port, () => 
    console.log(`Connected! server running on port ${port}`))})
    .catch((err) => console.log(`${err} Did not connect`))    
 
app.use('/api/u', userRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/v', videoRoutes)
app.use('/auth', authRoutes)
