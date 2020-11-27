import React, { useState } from 'react';
import { ReactIcon, JSIcon, RailsIcon, RubyIcon, ReduxIcon, CSSIcon, HTMLIcon, PSIcon } from './SkillsIcons';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Project = ({ title, snippet, url, languages }) => {

  const overlay = React.createRef();
  const line = React.createRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    handleButtonHover();
  }

  const handleButtonHover = () => {
    if (overlay.current.className === "project-overlay-hover") {
      overlay.current.className = "project-overlay"
      line.current.className = "project-line"
    } else {
      overlay.current.className = "project-overlay-hover"
      line.current.className = "project-line-hover"
    }
  }

  const mapLanguages = () => {
    if (languages) {
      return languages.map(language => {
        if (language === "react") {
          return <ReactIcon />
        } 
        if (language === "javascript") {
          return <JSIcon />
        } 
        if (language === "rails") {
          return <RailsIcon />
        } 
        if (language === "ruby") {
          return <RubyIcon />
        } 
        if (language === "redux") {
          return <ReduxIcon />
        } 
        if (language === "css") {
          return <CSSIcon />
        } 
        if (language === "html") {
          return <HTMLIcon />
        } 
        if (language === "ps") {
          return <PSIcon />
        } 
        return null
      })

    }
  }

  return (
    <div 
      onClick={toggleModal}
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

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={0}
      >

        <div className="modal-close" onClick={toggleModal}>x</div>
        <div className="modal-content">
          <div className="modal-column1">
            <iframe width="420" height="315" src={url} title={title} frameBorder="0" allowFullScreen className="video" >
            </iframe>
          </div>
          <div className="modal-column2">
            <div className="modal-title">{title}</div>
            {snippet}
            {mapLanguages()}
            <div className="view-code">
              <a 
                href="https://github.com/dougschallmoser/trailblaze-react-app" 
                target="_blank" 
                rel="noreferrer" 
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default Project;