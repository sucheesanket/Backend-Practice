const express=require("express")

const app=express()
app.use(express.json())
const notes=[]

app.get("/note",(req,res)=>{
    res.send(notes)
})

app.post("/note",(req,res)=>{
    notes.push(req.body)
    res.send("Note is created")
    
})
app.delete("/note/:id",(req,res)=>{
    delete notes[req.params.id]
    res.send("Note deleted Successfully");
})
app.patch("/note/:id",(req,res)=>{
    notes[req.params.id].note=req.body.note
    res.send("Note updated successfully!!")
})

module.exports=app