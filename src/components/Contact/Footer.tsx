import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section id="quote">
      <div className="quote-overlay"></div>
      <div id="copyright">
      Copyright © 2020 Doug Schallmoser
      </div>
    </section>
  )
}

export default Footer;