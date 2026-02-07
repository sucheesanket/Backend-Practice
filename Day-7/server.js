const app=require("./src/app")
const connectDB=require("./src/config/database")
require("dotenv").config()


const mongoose=require("mongoose")



connectDB()

// 


app.listen(3000,()=>{
    console.log("The server is running on port 3000");
    
})
