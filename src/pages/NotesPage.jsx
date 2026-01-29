import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import NewNote from "./NewNote";
import NoteDetail from "./NoteDetail";

function NotesPage(){

    const [notes,setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem('notenest-notes');
        return savedNotes?JSON.parse(savedNotes):[];
    });

    useEffect(()=>{
        localStorage.setItem('notenest-notes',JSON.stringify(notes))
    },[notes])

    const sortedNotes = [...notes].sort(
        (a,b)=>b.updatedAt - a.updatedAt
    )

    const createNote = (note) =>{
        setNotes((prevnote)=>[note,...prevnote])
    }

    const updateNotes = (note) =>{
        setNotes((prevnote)=>prevnote.map((n)=>n.id===note.id?note:n))
    }

    const deleteNote = (id) =>{
        setNotes((prevnote)=>prevnote.filter((n)=>n.id!=id))
    }

    return(
        <div className="flex h-screen flex-col md:flex-row">
            <SideBar notes = {sortedNotes}/>
            <main className="flex-1">
                <Routes>
                    <Route path="/new" element={<NewNote createNote={createNote} />} />
                    <Route path="/note/:id" element={<NoteDetail notes={notes} onUpdateNote={updateNotes} onDeleteNote={deleteNote}/>} />
                    <Route path="/" element = {<div className="p-6 text-gray-500">Create or select a note to get started</div>} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesPage;