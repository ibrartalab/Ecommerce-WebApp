import 'dotenv/config'

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME
const JWT_SECRET = process.env.JWT_SECRET

export {PORT,MONGODB_URL,DB_NAME,JWT_SECRET}