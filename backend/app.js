import express from 'express'
import user from './routes/userRoute.js'

const app = express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:false}))



app.use('/api/v1/user',user)



export default app