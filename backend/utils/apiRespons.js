class ApiRespons {
    constructor(
        statusCode,
        data,
        message="success"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 401
    }
}

export {ApiRespons}