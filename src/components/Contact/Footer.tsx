import React from 'react';
import Fade from 'react-reveal/Fade';
import './Footer.css';

const Footer: React.FC = (): JSX.Element => {
  return (
    <Fade bottom>
    <section id="quote">
      <div className="quote-overlay"></div>
      <div id="copyright">
      Copyright © 2020 Doug Schallmoser
      </div>
    </section>
    </Fade>
  )
}

export default Footer;