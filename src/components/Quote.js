import React from 'react';

const Quote = ({ id }) => {
  return (
    <section id={id || "quote"}>
      <div className="quote-overlay"></div>
    </section>
  )
}

export default Quote;