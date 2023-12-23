import {mongoose} from 'mongoose'
import { DB_NAME, MONGODB_URL } from '../config/config.js'

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${MONGODB_URL}`)
        console.log(`Database connect to the host : ${connection.connection.host}`)
    } catch (error) {
        console.log("Database not connect!")
    }
}

export default dbConnect