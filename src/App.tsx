import './tailwind.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Course from 'pages/course/[slug]'
import Lesson from 'pages/lesson/[slug]'
import Home from 'pages/index'

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/lesson' element={<Lesson />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
