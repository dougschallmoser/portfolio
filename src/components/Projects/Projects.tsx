import React, { useRef, useLayoutEffect } from 'react';
import Project from './Project';
import './Projects.css';

const Projects: React.FC = () => {

  const hr = useRef<HTMLHRElement>(null);

  useLayoutEffect(() => {
    if (hr.current) {
      const hrTop = hr.current.getBoundingClientRect().top;
      const onScroll = () => {
        if (hr.current && hrTop - 100 < window.scrollY + window.innerHeight) {
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
    <section id="projects">
      <div id="projects-header">PROJECTS</div>
      <hr ref={hr} className="line" />
      <div className="projects-grid">
        <Project 
          title="TRAILBLAZE" 
          snippet="Geosocial networking SPA for finding and communicating with new friends in the outdoor adventure space" 
          highlights={["Integrated Google Maps, Places, Geocoding, and Hiking Project API’s", "Implemented live chat feature with Rails Action Cable and WebSockets", "Managed global state with Redux and utilized Thunk middleware for async actions", "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side"]}
          youtube="https://youtube.com/embed/Pzksvd9wRZM"
          github="https://github.com/dougschallmoser/trailblaze"
          live="https://trailblaze-app.netlify.app/"
          languages={["react", "redux", "javascript", "rails", "ruby", "postgres", "css", "html"]}
        />
        <Project 
          title="GASTROPODA"
          snippet="Social SPA literary magazine for showcasing, submitting, and interacting with unique short stories" 
          highlights={["Front-end fully built with modern Object-Oriented JavaScript, arrow functions, and custom CSS", "Integrated user interaction features including liking, commenting, and searching", "Utilized AJAX requests, followed MVC paradigm, and implemented RESTful conventions"]}
          youtube="https://youtube.com/embed/HSfkeg94AF4"
          github="https://github.com/dougschallmoser/gastropoda"
          live="https://gastropoda.netlify.app/"
          languages={["javascript", "rails", "ruby", "postgres", "css", "html", "ps"]}
        />
        <Project 
          title="CONNECTAROT"
          snippet="Interactive MPA for user and computer generated tarot card readings" 
          highlights={["Implemented full CRUD functionality, complex forms, validations, error handling, and user authorization", "Integrated MVC paradigm, RESTful API architecture complex model associations, ActiveRecord, and scope methods", "Integrated standard user accounts plus third-party user authentication with Github/Facebook through OAuth2"]}
          youtube="https://youtube.com/embed/bd-E0IjS6to"
          github="https://github.com/dougschallmoser/connectarot"
          live="https://connectarot.herokuapp.com/"
          languages={["rails", "ruby", "postgres", "css", "html"]}
        />
        <Project 
          title="PHOTO STORE"
          snippet="SPA e-commerce store for photography prints" 
          highlights={["Integrated Context API and useReducer for global state management", "Built with modern React hooks, JS ES6+, and TypeScript", "Utilized styled-components for custom UI design and styling", "Integrated Stripe API for secure payment transactions"]}
          snapshot="https://user-images.githubusercontent.com/65590878/108454788-e7994180-7221-11eb-8635-260805937327.png"
          github="https://github.com/dougschallmoser/photography-store"
          live="https://photography-store.netlify.app/"
          languages={["react", "typescript", "javascript", "css", "html"]}
        />
        <Project 
          title="PORTFOLIO"
          snippet="SPA for showcasing my personal software developer portfolio" 
          highlights={["Integrated modern React hooks, JS ES6+, and TypeScript", "Responsive design with custom styling", "Integrated TypeScript", "Clean, readable and maintainable code"]}
          youtube="https://youtube.com/embed/kdalKGQNYH4"
          github="https://github.com/dougschallmoser/portfolio"
          live="https://www.dougschallmoser.com/"
          languages={["react", "typescript", "javascript", "css", "html", "ps"]}
        />
        <Project 
          title="ERIN'S STORIES"
          snippet="SPA showcasing portfolio of literary publications" 
          highlights={["Integrated modern React hooks and JS ES6+", "Responsive design with custom styling and CSS animations"]}
          youtube="https://youtube.com/embed/cBNgUbGjnq8"
          github="https://github.com/dougschallmoser/erins-stories"
          live="https://www.erinschallmoser.com/"
          languages={["react", "javascript", "css", "html"]}
        />
        <Project 
          title="NATPARKREV"
          snippet="MPA for sharing user generated National Park reviews with the world"
          highlights={["Built with Sinatra and Ruby following MVC paradigm", "Integrated CRUD functionality, ActiveRecord, complex forms, join tables, and error handling", "Implemented user accounts, authentication, and validations"]}
          youtube="https://youtube.com/embed/r41ATsJk_s4"
          github="https://github.com/dougschallmoser/natparkrev"
          languages={["ruby", "css", "html"]}
        />
        <Project 
          title="HIKING LOCATOR" 
          snippet="CLI application for locating hiking trails in the U.S." 
          highlights={["Implemented Object-Oriented design patterns", "Integrated and parsed API data, scraped webpages with Nokogiri gem", "Utilized Geocoder gem to parse location information from user input"]}
          youtube="https://youtube.com/embed/rCtUjN31Phw"
          github="https://github.com/dougschallmoser/hiking-trails-locator"
          languages={["ruby"]}
        />
      </div>
    </section>
  )
}

export default Projects;