const asyncHandler = (fn) => {
    return async (req,res,next) => {
        await Promise
        .resolve(fn(req,res,next))
        .catch((error) => next(error))
    }
}

export {asyncHandler}