import React from "react"
import {Link, useNavigate} from 'react-router-dom'
import NoteItem from "./NoteItem";

function SideBar({notes}) {
    const navigate = useNavigate();

  return (
    <aside className="w-64 border-r border-gray-200 p-4">
      <h1 className="text-xl font-semibold mb-4"><Link to={'/'} className="text-xl font-semibold mb-4 hover:opacity-60">NoteNest</Link></h1>
      <button 
      onClick={()=>navigate('/new')}
      className="mb-4 rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700">+ New Note</button>
      <div className="text-sm text-gray-500">
        {notes.length===0?
        <div className="text-sm text-gray-500">
            No notes yet
          </div>
          :
          (notes.map((note)=>(
            <NoteItem  key={note.id} note={note} />
          ))
          )}
      </div>
    </aside>
  )
}

export default SideBar
