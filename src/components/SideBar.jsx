import React from "react"
import {useNavigate} from 'react-router-dom'

function SideBar({notes}) {
    const navigate = useNavigate();

  return (
    <aside className="w-64 border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">NoteNest</h2>
      <button 
      onClick={()=>navigate('/new')}
      className="mb-4 rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700">+ New Note</button>
      <div className="text-sm text-gray-500">
        {notes.length===0?'No Notes yet':'Notes will appear here'}
      </div>
    </aside>
  )
}

export default SideBar
