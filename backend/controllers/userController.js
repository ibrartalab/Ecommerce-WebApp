import User from '../models/userModel.js'


//Register User
export const registerUser = async (req,res) => {
    // 1:checking that the user has already exist or not
    const email = req.body.email;
    const findUser = await User.findOne({email:email})
    
    if(!findUser){
        const newUser = await User.create(req.body);
        res.status(201).json({
            success:true,
            message:"Account created successfully",
            newUser
        })
    }
    else{
        res.status(401).json({
            success:false,
            message:"This account already exist"
        })
    
    }

    
}

//Login User

