import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [scrolled, setScrolled] = useState("nav-unscrolled")

  useEffect(() => {
    const scrollListener = document.addEventListener("scroll", e => {
      const scrollPosition = document.scrollingElement.scrollTop
      if (scrollPosition >= 75) {
        if (scrolled !== "nav-scrolled") {
          setScrolled("nav-scrolled")
        }
      } else {
        if (scrolled !== "nav-unscrolled") {
          setScrolled("nav-unscrolled")
        }
      }
    })

    return () => {
      document.removeEventListener("scroll", scrollListener)
    }
  }, [scrolled])

  return (
    <div className={scrolled}>
      <div className="navlogo">
        <Link to="/">DOUG SCHALLMOSER</Link>
      </div>
      <div className="navlinks">
        <Link to="/">Contact</Link>
        <Link to="/">Photography</Link>
        <Link to="/">Projects</Link>
        <Link to="/">About</Link>
      </div>
    </div>
  )
}

export default NavBar;