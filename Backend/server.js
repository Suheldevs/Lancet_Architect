import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const mongodb_url = process.env.MONGODB_URL
const port = process.env.PORT


//routes
app.get('/',(req,res)=>{
    res.json({message:`Server is Running on ${port}`})
})

//user route
import UserRoutes from './routes/user.routes.js'
app.use('/admin',UserRoutes)

//gallery route
import GalleryRoutes from './routes/gallery.routes.js'
app.use('/gallery',GalleryRoutes)

//blog route
import BlogRoutes from './routes/blog.routes.js'
app.use('/blog',BlogRoutes)

//inquiry route
import InquiryRoutes from './routes/inquiry.routes.js'
app.use('/inquiry',InquiryRoutes)

//inquiry route
import ProjectRoutes from './routes/project.routes.js'
app.use('/project',ProjectRoutes)




app.listen(port, console.log(`Server is running on ${port}`))

mongoose.connect(mongodb_url).then(() => console.log('Database Connected')).catch((err) => { console.log('Data connection error', err) })