import React, { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewNote({createNote}){

    const navigate = useNavigate();
    const hasCreated = useRef(false);

    useEffect(()=>{

        if (hasCreated.current) return
        hasCreated.current = true

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