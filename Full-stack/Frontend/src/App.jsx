import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  // console.log("hello");

  // console.log(res.data.notes);

  function fetchNotes() {
    axios.get("https://backend-practice-jhou.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }
  useEffect(() => {
    fetchNotes();
  }, []);

  function submitHandle(e){
    e.preventDefault()
    const { title , description }= e.target.elements
    console.log(title.value,description.value);

    axios.post("https://backend-practice-jhou.onrender.com/api/notes",{
      title : title.value,
      description : description.value
    })
    .then(res=>{
      console.log(res.data);
      fetchNotes()
      
    })
    

  }

  function deleteHandle(noteId){
    axios.delete("https://backend-practice-jhou.onrender.com/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data);
      fetchNotes()
      
    })


  }
  

  return (
    <div>
      <form className="form-design" onSubmit={submitHandle} >
        <input className="title" type="text" name="title" placeholder="Enter Title" />
        <input className="title" type="text" name="description" placeholder="Enter Description" />
        <button className="button">Create Note</button>
      </form>
      <div className="notes">
      {notes.map((note) => {
        return (
          <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={()=>{deleteHandle(note._id)}}>Delete</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default App;
