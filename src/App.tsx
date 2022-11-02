import './tailwind.css'
import Home from 'pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Course from 'pages/course/[slug]'

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
