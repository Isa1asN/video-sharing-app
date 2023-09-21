import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

const port = process.env.PORT || 8000
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {app.listen(port, () => 
    console.log(`Connected! server running on port ${port}`))})
    .catch((err) => console.log(`${err} Did not connect`))    
