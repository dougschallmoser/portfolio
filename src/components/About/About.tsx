import React, { useRef, useLayoutEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

const About: React.FC = (): JSX.Element => {

  const hr = useRef<HTMLHRElement | null>(null);
  const [clicked, setClicked] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (hr.current) {
      const hrTop: number = hr.current.getBoundingClientRect().top;
      const onScroll = () => {
        if (hr.current && hrTop < window.scrollY + window.innerHeight) {
          hr.current.className = "line-scroll"
        } else if (hr.current) {
          hr.current.className = "line"
        }
      }
      
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
    
  }, [])

  const handleClick: () => void = () => {
    setClicked(!clicked)
  }

  return (
    <section id="about">
      <div id="projects-header">MY STORY</div>
      <hr ref={hr} className="line" />
      <div className="about-content">
        <Fade>
          <p>
            Hello! My name is Doug Schallmoser and I am a software engineer living in Bellingham, WA. I love the challenge that coding brings and the subsequent potential it has to improve lives. On a more personal level, I love the outdoors and when I'm not programming I'm typically hiking somewhere in the mountains. 
          </p>
        </Fade>
        {!clicked && <button id="about-more" title="Read More" onClick={handleClick}>READ MORE</button>}
        {clicked ? 
          <div id="about-more-content">
            <div id="about-mystory-container">
              <div id="about-mystory">
                FROM CIVIL ....
                <p>
                  I graduated from Florida Gulf Coast University with B.S. degrees in Civil Engineering and Environmental Engineering. I went on to work for the Florida Department of Transportation as a civil engineer focusing on bridge repair and traffic operations. I learned many valuable things during this time, from technical engineering practices to project management skills. After obtaining my Professional Engineer (P.E.) license, I made the decision to leave my job to pursue my passion of programming.
                </p>
              </div>
              <div id="about-mystory">
                .... TO SOFTWARE 
                <p>
                  My first experience with programming came in high school where I dabbled in web development. In 2019, I began learning online from Harvard's computer science course "CS50". Before I knew it, I was hooked and wanted to pursue coding further. After relocating to Washington state in 2020, I enrolled in Flatiron School's Software Engineering program. I graduated the program in November 2020 having spent 1200+ hours learning and coding during the five-month long program.
                </p>
              </div>
            </div>
          
            <p>
            I am continuing my programming education by building new projects and adding to my software development knowledge base. My passion for coding, combined with my technical background in engineering, provides me with a unique skillset for approaching complex topics and tackling real-world problems.
            </p>
          </div>
        : null }
      </div>
    </section>
  )
}

export default About;