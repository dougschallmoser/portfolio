import { GlobalStyle } from './';
import { Navbar } from '../Navbar';
import { Splash } from '../Splash';
import { About } from '../About';
import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { Blog } from '../Blog';
import { Contact } from '../Contact';
import { Footer } from '../Footer';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Splash />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export { App };