import { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { SCSplash } from './styles';
import './Splash.css';

const Splash = (): JSX.Element => {

  const line = useRef<HTMLHRElement | null>(null);

  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const handleButtonHover = (): void => {
    if (line.current) {
      setButtonHover(!buttonHover)
      if (buttonHover) {
        line.current.style.width = "125px"
      } else {
        line.current.style.width = "300px"
      }
    }
  }

  return (
    <SCSplash>
      <div id="splash">
        <div className="splash-intro">
          <div className="splash-name">DOUG SCHALLMOSER</div>
          <hr ref={line} className="splash-line" />
          <div className="splash-bio">
            <div className="splash-title">
              Software Engineer
            </div>
            <div className='splash-location'>Bellingham, WA</div>
            <div className="splash-button" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>
              <Link to="projects" smooth={true} offset={-58}>
                VIEW PROJECTS
              </Link>
            </div>
          </div>
        </div>
        <div className="splash-overlay" />
      </div>
    </SCSplash>
  )
}

export { Splash };