import dbConnect from "./db/dbConnect.js"
import { PORT } from "./config/config.js"
import app from "./app.js"
import { compareSync } from "bcrypt"




//Db Connection
dbConnect()
.then(() => {
    app.listen(PORT,() => console.log(`Server is running on PORT: ${PORT}`))
})
.catch((err) => console.log(err))