import React from 'react';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <Splash />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  )
}

export default App;