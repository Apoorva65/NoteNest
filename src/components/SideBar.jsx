import React from "react"

function SideBar({notes}) {
  return (
    <aside className="w-64 border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">NoteNest</h2>
      <div className="text-sm text-gray-500">
        {notes.length===0?'No Notes yet':'Notes will appear here'}
      </div>
    </aside>
  )
}

export default SideBar
