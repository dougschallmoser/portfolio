import React from 'react';
import Navbar from '../Navbar/Navbar';
import Splash from '../Splash/Splash';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Contact/Footer';
import { GlobalStyle } from './App.styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Splash />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App;