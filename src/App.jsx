import { Routes, Route } from 'react-router-dom'
import NotesPage from './pages/NotesPage'
import NewNote from './pages/NewNote'
import NoteDetail from './pages/NoteDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/note/:id" element={<NoteDetail />} />
    </Routes>
  )
}

export default App
