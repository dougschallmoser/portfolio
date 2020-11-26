import React from 'react';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Photography from './components/Photography';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <Splash />
      <About />
      <Projects />
      <Blog />
      <Photography />
      <Contact />
    </>
  )
}

export default App;