import React, { useState } from 'react';
import { ReactIcon, JSIcon, RailsIcon, RubyIcon, ReduxIcon, CSSIcon, HTMLIcon, PSIcon } from './SkillsIcons';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Project = ({ title, snippet, url, languages, highlights, github }) => {

  const overlay = React.createRef();
  const line = React.createRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleButtonHoverEnter = () => {
    if (overlay.current.className === "project-overlay-hover") {
      overlay.current.className = "project-overlay"
      line.current.className = "project-line"
    } else {
      overlay.current.className = "project-overlay-hover"
      line.current.className = "project-line-hover"
    }
  }

  const handleButtonHoverLeave = () => {
    overlay.current.className = "project-overlay"
    line.current.className = "project-line"
  }

  const mapLanguages = () => {
    if (languages) {
      return languages.map(language => {
        if (language === "react") {
          return <ReactIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "javascript") {
          return <JSIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "rails") {
          return <RailsIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "ruby") {
          return <RubyIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "redux") {
          return <ReduxIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "css") {
          return <CSSIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "html") {
          return <HTMLIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        if (language === "ps") {
          return <PSIcon key={title + language} cssName="modal-icon" color="#c0a583" />
        } 
        return null
      })

    }
  }

  return (
    <>
      <div 
        onClick={toggleModal}
        className="project-item" 
        onMouseEnter={handleButtonHoverEnter} 
        onMouseLeave={handleButtonHoverLeave} 
        style ={ { backgroundImage: `url('./images/${title}.jpg')` } }
      >
        <div className="project-text">
          <div className="project-title">{title}</div>
          <hr ref={line} className="project-line"/>
          <p>{snippet}</p>
        </div>
        <div ref={overlay} className="project-overlay"></div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={0}
      >

        <div className="modal-close" onClick={toggleModal}>&#10006;</div>
        <div className="modal-content">
          <div className="modal-column1">
            <iframe width="420" height="315" src={url} title={title} frameBorder="0" allowFullScreen className="video" >
            </iframe>
          </div>
          <div className="modal-column2">
            <div className="modal-title">{title}</div>
            {snippet}
            <ul className="modal-highlights">
              {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="modal-languages">
              <p>Software Utilized:</p>
              {mapLanguages()}
            </div>
            <div className="view-code">
              <a 
                href={github} 
                target="_blank" 
                rel="noreferrer" 
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Project;