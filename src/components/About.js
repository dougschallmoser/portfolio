import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about">
      <div id="blog-header">MY STORY</div>
        <hr />
      <div className="about-content">
        <div id="about-mystory">
          CIVIL ENGINEER TO SOFTWARE DEVELOPER
        </div>
        <p>
          Hello! My name is Doug Schallmoser and I am a software developer living in Bellingham, WA. I love the challenge that coding brings and the subsequent potential it provides to make lives better. My first experience with coding came in 2019 while I was studying for the PE (Professional Engineering) exam. I started watching lectures from Harvard's computer science course "CS50" in between studying for the exam. Before I knew it I was hooked and wanted to pursue coding further.  
        </p>
        <p>
        I graduated from Florida Gulf Coast University in 2012 with Bachelor of Science degrees in Civil Engineering and Environmental Engineering. I then worked for the Florida Department of Transportation as a civil engineer from late 2013 until early 2020. I learned so many valuable things during this time, from technical engineering practices to project management skills. In January 2020, I became a licensed Professional Engineer in Florida. I then quit my job and my wife and I relocated to Washington state.
        </p>
        <p>
          After we settled in to our new place, I knew I wanted to switch careers. I enrolled in Flatiron School's Software Engineering program and formally began in July. I graduated the program in December 2020 having spent 1200+ hours learning and coding during the five month long program. I built several projects to showcase my skillset which are provided on this site.
        </p>
        <p>
        I am continuing my personal education efforts by building new projects and learning new things. I believe my passion for coding combined with my technical background in engineering gives me a unique skillset and perspecive on problem solving in this vast world of technology and programming.
        </p>
        <Skills />
      </div>
    </section>
  )
}

export default About;