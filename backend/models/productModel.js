import {mongoose,Schema} from 'mongoose'

const productSchema = new Schema(
    {
        name:{type:String,required:true},
        description:{type:String,required:true},
        image:[
            {
                url:{type:String,required:true}
            }
        ]
    },
    {timestamps:true}
)

export const Pdoduct = mongoose.model("Product",productSchema)