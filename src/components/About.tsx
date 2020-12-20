import React, { useRef, useLayoutEffect } from 'react';
import Skills from './Skills';

const About: React.FC = () => {

  const hr = useRef<HTMLHRElement>(null);

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

  return (
    <section id="about">
      <div id="projects-header">MY STORY</div>
      <hr ref={hr} className="line" />
      <div className="about-content">
        <div id="about-mystory">
          BIO
        </div>
        <p>
          Hello! My name is Doug Schallmoser and I am a software engineer living in Bellingham, WA. I love the challenge that coding brings and the subsequent potential it has to improve lives. On a more personal level, I love the outdoors and when I'm not programming I'm typically hiking somewhere in the mountains. 
        </p>
        <div id="about-mystory">
          BACKGROUND IN CIVIL ENGINEERING
        </div>
        <p>
        I graduated from Florida Gulf Coast University in 2012 with Bachelor of Science degrees in Civil Engineering and Environmental Engineering. I went on to work for the Florida Department of Transportation as a civil engineer from late 2013 until early 2020. I learned many valuable things during this time, from technical engineering practices to project management skills. In January 2020, I became a licensed Professional Engineer in Florida. With this achievement complete, I made the decision to leave my job as I was overcome with a need to pursue a career more meaningful to me.
        </p>
        <div id="about-mystory">
          TRANSITION TO SOFTWARE ENGINEERING
        </div>
        <p>
          My first experience with coding came in 2019 where I began watching lectures from Harvard's computer science course "CS50" in between studying for the exam. Before I knew it, I was hooked and wanted to pursue coding further. After relocating to Washington with my wife, I enrolled in Flatiron School's Software Engineering program and formally began over the summer. I graduated the program in November 2020 having spent 1200+ hours learning and coding during the five-month long program.
        </p>
        <p>
        I am continuing my personal education efforts by building new projects and adding to my software knowledge base. My passion for coding combined with my technical background in engineering provides me with a unique skillset and perspective on problem-solving in this vast world of technology and programming.
        </p>
        <Skills />
      </div>
    </section>
  )
}

export default About;