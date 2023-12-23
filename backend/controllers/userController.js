import { genrateToken } from '../config/jwtTokens.js';
import { asyncHandler } from '../utils/asyncErrorHandler.js'
import User from '../models/userModel.js'
import validateId from '../utils/validateMDB_Id.js';


//Register User
export const registerUser = asyncHandler(async (req, res) => {
    // 1:checking that the user has already exist or not
    const email = req.body.email;
    const findUser = await User.findOne({ email: email })

    if (!findUser) {
        const newUser = await User.create(req.body);
        res.status(201).json({
            success: true,
            message: "Account created successfully",
            newUser
        })
    }
    else {
        throw new Error('User Already Exist')

    }


})


//Login User
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //checking if the user found or not
    const findUser = await User.findOne({ email })
    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            _id: findUser?._id,
            name: findUser?.name,
            username: findUser?.username,
            email: findUser?.email,
            token: genrateToken(findUser?._id)
        })
    } else {
        throw new Error("Invalid credentials");
    }
})


//get all users
export const getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await User.find();
    res.json({ allUsers })
})


//get a single user
export const getSingleUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id)
    try {
        const user = await User.findById(id)
        res.json({ user })
    } catch (error) {
        throw new Error('User not found')
    }

})


//Delete a user
export const deleteAUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id)
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.json({ deleteUser })
    } catch (error) {
        throw new Error("User not found")
    }
})


//Update a User
export const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
    validateId(id)
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name: req?.body?.name,
            username: req?.body?.username,
            email: req?.body?.email,
            password: req?.body?.password
        }, {
            new: true
        })
        res.json({ updatedUser })
    } catch (error) {
        throw new Error('user not found')
    }
})


//Block and UnBlock User Through Admin

//Block the User
export const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id)
    try {
        const block = await User.findByIdAndUpdate({ id }, {
            isBlock: true
        },
            {
                new: true
            }
        )
        res.json({
            message: "User is Blocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})



//UnBlock the  User
export const unBlockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateId(id)
    try {
        const unBlock = await User.findByIdAndUpdate(id, {
            isBlock: false
        },
            {
                new: true
            }
        )
        res.json({
            message: "User is UnBlocked"
        })
    } catch (error) {
        throw new Error(error)
    }
})