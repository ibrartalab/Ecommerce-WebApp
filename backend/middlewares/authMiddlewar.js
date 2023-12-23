import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncErrorHandler.js";
import { JWT_SECRET } from "../config/config.js";

const verifyJwtToken = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            if (token) {
                const decode = jwt.verify(token, JWT_SECRET)
                const user = await User.findById(decode?.id)
                req.user = user;
                next()
            }
        } catch (error) {
            throw new Error('Not Authorized token expired,Please Login Again')
        }
    } else {
        throw new Error('There is no token attached to the headers')
    }
})


//check is the user is admin or not
const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user;
    const admin = await User.findOne(email)
    if (admin.role !== "admin") {
        throw new Error('You are not a admin')
    } else {
        next()
    }
})
export { verifyJwtToken, isAdmin }