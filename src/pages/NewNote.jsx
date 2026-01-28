import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewNote({createNote}){

    const navigate = useNavigate();

    useEffect(()=>{
        const newNote = {
            id : Date.now().toString(),
            title : '',
            content : '',
            updatedAt : Date.now()
        }

        createNote(newNote);
        navigate(`/note/${newNote.id}`,{ replace: true });
    },[])

    return null;
}

export default NewNote;