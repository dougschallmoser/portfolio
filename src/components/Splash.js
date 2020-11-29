import React from 'react';
import { Link } from 'react-scroll'

const Splash = () => {

  const overlay = React.createRef();
  const line = React.createRef();

  const handleButtonHover = () => {
    if (overlay.current.className === "splash-overlay-hover") {
      overlay.current.className = "splash-overlay"
      line.current.className = "splash-line"
    } else {
      overlay.current.className = "splash-overlay-hover"
      line.current.className = "splash-line-hover"
    }
  }

  return (
    <section id="splash">
      <div className="splash-intro">
        <div className="splash-name">DOUG SCHALLMOSER</div>
        <hr ref={line} className="splash-line" />
        <div className="splash-bio">
          <div className="splash-title">
            Software Developer
          </div>
          Bellingham, WA
          <div className="splash-button" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>
            <Link to="projects" smooth={true} offset={-58}>
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