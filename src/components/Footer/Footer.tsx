import Fade from 'react-reveal/Fade';
import { SCFooter } from './styles';
import './Footer.css';

const Footer = (): JSX.Element => {
  return (
    <Fade bottom>
      <SCFooter>
        <div className="quote-overlay"></div>
        <div id="copyright">
          Copyright © 2021 Doug Schallmoser
        </div>
      </SCFooter>
    </Fade>
  )
}

export { Footer };