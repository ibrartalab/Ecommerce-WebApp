//If somthing not found
export const notFound = (req,res,next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`)
    res.status(404)
    next(error)
}

//Error handler for APIs
export const apiErrorHandler = (err,req,res,next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode)
    res.json({
        message:err?.message,
        stack: err?.stack,
    })
}
