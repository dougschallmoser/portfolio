import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ProjectDisplay = ({ display, closeModal }) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(display)
  }, [display])

  const handleClose = () => {
    setShow(false)
    closeModal()
  }

  const renderProject = () => {
    return (
      <>
      <div className="modal">
        <div className="modal-close" onClick={handleClose}>x</div>
        <div className="modal-content">

        </div>
      </div>
      <div className="modal-overlay"></div>
      </>
    )
  }

  return (
    show && ReactDOM.createPortal(renderProject(), document.querySelector("#modal"))
  )

}

export default ProjectDisplay;