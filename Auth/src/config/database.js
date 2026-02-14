const mongoose=require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("The server is connected to the database successfully!!!");
        
    })
}

module.exports=connectToDB
