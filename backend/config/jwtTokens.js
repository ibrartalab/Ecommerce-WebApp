import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js'

const genrateToken = (id) => {
    return jwt.sign({id},JWT_SECRET,{expiresIn:"3d"})
}

export {genrateToken}