import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Notes Page</div>} />
      <Route path="/new" element={<div>New Note</div>} />
      <Route path="/note/:id" element={<div>Note Details</div>} />
    </Routes>
  )
}

export default App
