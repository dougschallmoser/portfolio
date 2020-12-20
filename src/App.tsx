import React from 'react';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Quote from './components/Quote';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Splash />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Quote />
    </>
  )
}

export default App;