const app=require("./src/app")
require("dotenv").config()
const connectToDB=require("./src/config/database")
connectToDB()


app.listen(3000,()=>{
    console.log("The server is running in port 3000");
    
})
