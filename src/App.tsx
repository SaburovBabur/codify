import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Course from 'pages/course/[slug]'
import Lesson from 'pages/lesson/[slug]'
import Home from 'pages/index'
import useScrollToTop from 'hooks/useScrollToTop'
import './tailwind.css'
// @ts-ignore
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  useScrollToTop()
  let location = useLocation()

  return (
    <>
      <Toaster />

      <TransitionGroup className={`h-full w-full`}>
        <CSSTransition key={location.pathname} classNames='fade' timeout={250}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Course />} />
            <Route path='/lesson' element={<Lesson />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App
