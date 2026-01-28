import React, { useState } from "react";
import { replace, useNavigate,useParams } from "react-router-dom";

function NoteDetail({notes,onUpdateNote,onDeleteNote}){

    const {id} = useParams();
    const navigate = useNavigate();

    const note = notes.find((n)=>n.id===id);

    if(!note){
        return(
            <div className="p-6 text-gray-500">
                Note not found
            </div>
        )
    }

    const handleUpdate = (field,value) => {
        onUpdateNote({
            ...note,
            [field] : value,
            updatedAt : Date.now()
        })
    }

    const handleDelete = () =>{
            onDeleteNote(note.id);
            navigate('/',{replace:true});
        }



    return(
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <input
                type="text"
                placeholder="Note Title"
                value={note.title}
                onChange={(e)=>handleUpdate('title',e.target.value)}
                className="mb-4 text-2xl font-semibold outline-none" />

                <button
                onClick={handleDelete}
                className="ml-4 rounded border border-red-200 px-3 py-1
                text-sm text-red-600
                hover:bg-red-50 hover:border-red-300 hover:text-red-700
                transition"
                >
                Delete
                </button>
             </div>

            <textarea
            type="text"
            placeholder="Start writing your note..."
            value={note.content}
            onChange={(e)=>handleUpdate('content',e.target.value)}
            className="flex-1 resize-none outline-none" />
        </div>
    )
}

export default NoteDetail;