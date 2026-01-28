import React, { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import NoteItem from "./NoteItem";

function SideBar({notes}) {
    const navigate = useNavigate();
    const [search,setSearch] = useState('');

    const filteredNotes = notes.filter((note)=>(
      note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <aside className="w-64 border-r border-gray-200 p-4">
      <h1 className="text-xl font-semibold mb-4"><Link to={'/'} className="text-xl font-semibold mb-4 hover:opacity-60">NoteNest</Link></h1>
      <button 
      onClick={()=>navigate('/new')}
      className="mb-4 rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700">+ New Note</button>
      
    <input
    type="text"
    placeholder="Search notes..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    className="mb-3 rounded border px-2 py-1 text-sm outline-none focus:ring" />

      <div className="text-sm text-gray-500">
        {notes.length===0?
        <div className="text-sm text-gray-500">
            No notes yet
          </div>
          :
          filteredNotes.length === 0 ? (
          <div className="text-sm text-gray-500">
            No matching notes
          </div>):
          (filteredNotes.map((note)=>(
            <NoteItem  key={note.id} note={note} />
          ))
          )}
      </div>
    </aside>
  )
}

export default SideBar
