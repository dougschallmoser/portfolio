import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <div id="about-mystory">
          CIVIL ENGINEER TO SOFTWARE DEVELOPER
        </div>
        <hr />
        <p>Hi! My name is Cindy Kim and I’ve graduated from Flation School in March 2016 as a Web Developer. Let me start with a small anecdote as to how I got here. 
        My first experience with coding was through a popular blog called Xanga around 2002. This blog had limited themes to choose from so you needed to learn html in order to truly personalize it. It’s no longer around and I wonder why… I didn’t know that this would trigger something later on in my future but it did!
        At the time I was really passionate for Fashion so I attended Fashion Institute of Technology for Fashion Merchandising and Management (currently split between Fashion Business Management and Production Management). I obtained an undergraduate Bachelors of Science degree and started my career in production/product development.
        I enjoyed it very much because it gave me a balance between being analytical and creative. It helped me be creative by having influence on approvals as concept of design was being executed in production. It was analytical because I needed to understand which factories had certain capacities that would allow us to reach shipping dates and cost margins.
        </p>
        <Skills />
      </div>
    </section>
  )
}

export default About;