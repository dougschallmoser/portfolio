import React from 'react';

const Project = ({ title, snippet }) => {

  const overlay = React.createRef();
  const line = React.createRef();

  const handleButtonHover = () => {
    if (overlay.current.className === "project-overlay-hover") {
      overlay.current.className = "project-overlay"
      line.current.className = "project-line"
    } else {
      overlay.current.className = "project-overlay-hover"
      line.current.className = "project-line-hover"
    }
  }
  return (
    <div 
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
  </div>
  )
}

export default Project;