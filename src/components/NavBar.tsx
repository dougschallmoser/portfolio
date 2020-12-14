import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

const NavBar: React.FC = () => {

  const [scrolled, setScrolled] = useState<string>("nav-unscrolled")

  useEffect(() => {
    document.addEventListener("scroll", e => {
      if (document.scrollingElement) {
        const scrollPosition: number = document.scrollingElement.scrollTop
        if (scrollPosition >= 60) {
          if (scrolled !== "nav-scrolled") {
            setScrolled("nav-scrolled")
          }
        } else {
          if (scrolled !== "nav-unscrolled") {
            setScrolled("nav-unscrolled")
          }
        }
      }
    })
  }, [scrolled])

  return (
    <section className="nav">
      <div className={scrolled}>
        <div className="navlogo">
          <Link to="splash" smooth={true}>DOUG SCHALLMOSER</Link>
        </div>
        <div className="navlinks">
          <Link to="contact" smooth={true} offset={-58}>Contact</Link>
          <Link to="blog" smooth={true} offset={-58}>Blog</Link>
          <Link to="projects" smooth={true} offset={-58}>Projects</Link>
          <Link to="about" smooth={true} offset={-58}>About</Link>
        </div>
      </div>
    </section>
  )
}

export default NavBar;