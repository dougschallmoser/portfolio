import React, { useEffect } from 'react';

const Photography = () => {

  useEffect(() => {
    fetch('https://instagram.com/illbehiking/?__a=1')
    .then(response => response.json())
    .then(console.log);
  }, [])

  return (
    <section className="photography">

    </section>
  )
}

export default Photography;