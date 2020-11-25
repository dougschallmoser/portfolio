import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Splash />
      <About />
      <Projects />
    </Router>
  )
}

export default App;