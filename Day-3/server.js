const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/contact",(req,res)=>{
    res.send("Hello suchee,you are at contact page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
