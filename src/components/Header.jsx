import React from 'react'
import NavBar from './NavBar'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import AboutMe from '../pages/AboutMe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const pages = {
  HOME : <Home/>,
  PROJECTS : <Projects/>,
  CONTACT : <Contact/>,
  ABOUTME : <AboutMe/>
}
export default function Header() {

  return (
    <Router>
      <NavBar/>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}
