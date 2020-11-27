import React from 'react';
import { Link } from 'react-scroll'

const Splash = () => {

  const overlay = React.createRef();

  const handleButtonHover = () => {
    if (overlay.current.className === "splash-overlay-hover") {
      overlay.current.className = "splash-overlay"
    } else {
      overlay.current.className = "splash-overlay-hover"
    }
  }

  return (
    <section id="splash">
      <div className="splash-intro">
        <div className="splash-name">DOUG SCHALLMOSER</div>
        <hr className="splash-line" />
        <div className="splash-bio">
          <div className="splash-title">
            Software Developer
          </div>
          Bellingham, WA
          <div className="splash-button" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>
            <Link to="projects" spy={true} smooth={true} offset={-58}>
              VIEW PROJECTS
            </Link>
          </div>
        </div>
      </div>
      <div ref={overlay} className="splash-overlay"></div>
    </section>
  )
}

export default Splash;