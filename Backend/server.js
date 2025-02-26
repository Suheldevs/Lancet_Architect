import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())

const mongodb_url = process.env.MONGODB_URL
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.json({message:`Server is Running on ${port}`})
})

app.listen(port, console.log(`Server is running on ${port}`))

mongoose.connect(mongodb_url).then(() => console.log('Database Connected')).catch((err) => { console.log('Data connection error', err) })