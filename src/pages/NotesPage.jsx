import React, { useState } from "react";
import SideBar from "../components/SideBar";

function NotesPage(){

    const [notes,setNotes] = useState([]);

    return(
        <div className="flex h-screen">
            <SideBar notes = {notes}/>
            <main className="flex-1 p-6">
                <div className="text-gray-500">
                Select a note to start editing
                </div>
            </main>
        </div>
    )
}

export default NotesPage;