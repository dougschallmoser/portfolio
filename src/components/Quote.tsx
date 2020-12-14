import React from 'react';

type Props = {
  id?: string | null;
}

const Quote: React.FC<Props> = ({ id }) => {
  return (
    <section id={id || "quote"}>
      <div className="quote-overlay"></div>
    </section>
  )
}

export default Quote;