import React from 'react';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const pages = [
  { path: "/", component: <Home/> },
  { path: "/projects", component: <Projects/> },
  { path: "/about", component: <AboutMe/> },
  { path: "/contact", component: <Contact/> }
]

export default function Header() {
  return (
    <Router>
      <NavBar/>
      <main className="p-4">
        <Routes>
          {
            pages.map(({path, component},index)=>(
              <Route path={path} element={component} key={index}/>
            ))
          }
        </Routes>
      </main>
    </Router>
  );
}
