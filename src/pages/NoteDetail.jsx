import React from "react";
import { useParams } from "react-router-dom";

function NoteDetail({notes,onUpdateNote}){

    const {id} = useParams();

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



    return(
        <div className="p-6 h-full flex flex-col">
            <input
            type="text"
            placeholder="Note Title"
            value={note.title}
            onChange={(e)=>handleUpdate('title',e.target.value)}
            className="mb-4 text-2xl font-semibold outline-none" />

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