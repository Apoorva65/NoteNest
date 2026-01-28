import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import NewNote from "./NewNote";
import NoteDetail from "./NoteDetail";

function NotesPage(){

    const [notes,setNotes] = useState([]);

    const createNote = (note) =>{
        setNotes((prevnote)=>[note,...prevnote])
    }

    return(
        <div className="flex h-screen">
            <SideBar notes = {notes}/>
            <main className="flex-1">
                <Routes>
                    <Route path="/new" element={<NewNote createNote={createNote} />} />
                    <Route path="/note/:id" element={<NoteDetail/>} />
                    <Route path="/" element = {<div className="p-6 text-gray-500">Select a note to start editing</div>} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesPage;