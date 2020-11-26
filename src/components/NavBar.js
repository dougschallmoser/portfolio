import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

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
    <section className="nav">
      <div className={scrolled}>
        <div className="navlogo">
          <Link to="/">DOUG SCHALLMOSER</Link>
        </div>
        <div className="navlinks">
          <Link to="contact" spy={true} smooth={true} offset={-58}>Contact</Link>
          <Link to="photography" spy={true} smooth={true} offset={-58}>Photography</Link>
          <Link to="blog" spy={true} smooth={true} offset={-58}>Blog</Link>
          <Link to="projects" spy={true} smooth={true} offset={-58}>Projects</Link>
          <Link to="about" spy={true} smooth={true} offset={-58}>About</Link>
        </div>
      </div>
    </section>
  )
}

export default NavBar;