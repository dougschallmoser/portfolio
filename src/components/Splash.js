import React from 'react';

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
    <section className="splash">
      <div className="splash-intro">
        <div className="splash-name">I am Doug Schallmoser.</div>
        <div className="splash-bio">
          I'm a software developer living in Bellingham, WA.
          I love the challenge that coding brings and the subsequent potential it provides to make lives better.
          <div className="splash-button" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>
            <a href="#projects">View Projects</a>
          </div>
        </div>
      </div>
      <div ref={overlay} className="splash-overlay"></div>
    </section>
  )
}

export default Splash;