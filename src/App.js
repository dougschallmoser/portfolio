import React from 'react';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Quote from './components/Quote';

const App = () => {
  return (
    <>
      <NavBar />
      <Splash />
      <About />
      <Projects />
      <Blog />
      <Quote />
      <Contact />
    </>
  )
}

export default App;