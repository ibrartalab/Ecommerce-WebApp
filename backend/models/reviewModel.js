import {mongoose,Schema} from 'mongoose'

const reviewSchema = new Schema(
    {
        conmment:{type:String,required:true},
        author:{type:mongoose.SchemaTypes.ObjectId,ref:"User"},
        product:{type:mongoose.SchemaTypes.ObjectId,ref:"Product"}
    },
    {timestamps:true}
)

export const Review = mongoose.model("Review",reviewSchema)