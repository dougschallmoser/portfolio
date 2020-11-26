import React, { useState } from 'react';
import ProjectDisplay from './ProjectDisplay';

const Project = ({ title, snippet }) => {

  const overlay = React.createRef();
  const line = React.createRef();
  const [showProject, setShowProject] = useState(false);

  const handleButtonHover = () => {
    if (overlay.current.className === "project-overlay-hover") {
      overlay.current.className = "project-overlay"
      line.current.className = "project-line"
    } else {
      overlay.current.className = "project-overlay-hover"
      line.current.className = "project-line-hover"
    }
  }

  const handleClick = (event) => {
    setShowProject(true)
  }

  const handleClose = () => {
    setShowProject(false)
  }

  return (
    <div 
      onClick={handleClick}
      className="project-item" 
      onMouseEnter={handleButtonHover} 
      onMouseLeave={handleButtonHover} 
      style ={ { backgroundImage: `url('./images/${title}.png')` } }
    >
      <div className="project-text">
        {title}
        <hr ref={line} className="project-line"/>
        <p>{snippet}</p>
      </div>
      <div ref={overlay} className="project-overlay"></div>
      {showProject && <ProjectDisplay display={true} closeModal={handleClose} />}
  </div>
  )
}

export default Project;