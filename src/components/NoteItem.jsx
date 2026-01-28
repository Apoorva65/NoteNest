import React from "react";
import { Link, useLocation } from "react-router-dom";

function NoteItem({note}){
    const location = useLocation();
    const isActive = location.pathname===`/note/${note.id}`;
    const formattedTime = new Date(note.updatedAt).toLocaleString();

    return(
        <Link to={`/note/${note.id}`} className={`block rounded px-2 py-2 text-sm mb-1
        ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}
      `}>
        <div className="font-medium truncate">
            {note.title || 'Untitled'}
        </div>
        <div className="text-xs text-gray-400 truncate">
          Last Edited: {formattedTime}
        </div>
      </Link>
    )
}

export default NoteItem;