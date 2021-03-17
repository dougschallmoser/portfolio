import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { NavWrapper } from './Navbar.styles'

const Navbar: React.FC = (): JSX.Element => {

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
    <NavWrapper>
      <div className={scrolled}>
        {scrolled === 'nav-scrolled' && <div className="navlogo">
          <Link to="splash" smooth={true}>DOUG SCHALLMOSER</Link>
        </div>
        }
        <div className="navlinks">
          <Link to="contact" smooth={true} offset={-58}>CONTACT</Link>
          <Link to="blog" smooth={true} offset={-58}>BLOG</Link>
          <Link to="projects" smooth={true} offset={-58}>PROJECTS</Link>
          <Link to="about" smooth={true} offset={-58}>ABOUT</Link>
        </div>
      </div>
    </NavWrapper>
  )
}

export default Navbar;