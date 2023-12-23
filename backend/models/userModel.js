import { mongoose, Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "user"
    },
    isBlock:{
      type:Boolean,
      default:false
    },
    cart: {
      type: Array,
      default: []
    },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    whislist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
  },
  { timestamps: true }
);

//Password Encrypting
userSchema.pre("save", async function (next) {
  const saltRound = 10
  const salt = await bcrypt.genSaltSync(10)
  this.password = await bcrypt.hash(this.password, salt)
})

//Checking is the user password is correct or not
userSchema.methods.isPasswordMatched = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password)
}



const User = mongoose.model("User", userSchema);

export default User
