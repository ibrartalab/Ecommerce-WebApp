import mongoose from 'mongoose'

const validateId = (id) => {
    const isValid = mongoose.Schema.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error('This is not a valid id or not found')
}

export default validateId