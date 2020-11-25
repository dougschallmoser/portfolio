import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Splash />
      <About />
    </Router>
  )
}

export default App;