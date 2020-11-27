import React from 'react';
import Project from './Project';

const Projects = () => {

  return (
    <section id="projects">
      <div id="projects-header">PROJECTS</div>
      <hr />
      <div className="projects-grid">
        <Project 
          title="TRAILBLAZE" 
          snippet="Geosocial networking SPA for finding and communicating with new friends in the outdoor adventure space" 
          highlights={["Integrated Google Maps/Places/Geocoding and Hiking Project API’s to pull and parse location and trail data", "Implemented live chat feature with Rails Action Cable and WebSockets", "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side"]}
          url="https://youtube.com/embed/Pzksvd9wRZM"
          github="https://github.com/dougschallmoser/trailblaze-react-app"
          languages={["react", "redux", "javascript", "rails", "ruby", "css", "html"]}
        />
        <Project 
          title="GASTROPODA"
          snippet="Social SPA literary magazine for showcasing, submitting, and interacting with unique short stories" 
          highlights={["Front-end fully built with modern Object-Oriented JavaScript, arrow functions, and custom CSS", "Integrated user interaction features including comment and like functionality", "Utilized AJAX requests, followed MVC paradigm, and implemented RESTful conventions"]}
          url="https://youtube.com/embed/WYrxOOjoNe0"
          github="https://github.com/dougschallmoser/gastropoda-js-app"
          languages={["javascript", "rails", "ruby", "css", "html"]}
        />
        <Project 
          title="CONNECTAROT"
          snippet="Interactive MPA for user and computer generated tarot card readings" 
          highlights={["Implemented full CRUD functionality, complex forms, validations, error handling, and user authorization", "Integrated MVC paradigm, RESTful API architecture complex model associations, ActiveRecord, and scope methods", "Integrated standard user accounts plus third-party user authentication with Github/Facebook through OAuth2"]}
          url="https://youtube.com/embed/bd-E0IjS6to"
          github="https://github.com/dougschallmoser/connectarot-rails-app"
          languages={["rails", "ruby", "css", "html"]}
        />
        <Project 
          title="NATPARKREV"
          snippet="MPA for sharing user generated National Park reviews with the world"
          highlights={["Built with Sinatra and Ruby following MVC paradigm", "Integrated CRUD functionality, ActiveRecord, complex forms, join tables, and error handling", "Implemented user accounts, authentication, and validations"]}
          url="https://youtube.com/embed/r41ATsJk_s4"
          github="https://github.com/dougschallmoser/nat-park-rev-sinatra-app"
          languages={["ruby", "css", "html"]}
        />
        <Project 
          title="HIKINGLOCATOR" 
          snippet="CLI application for locating hiking trails in the U.S." 
          highlights={["Implemented Object-Oriented design patterns", "Integrated and parsed API data, scraped webpages with Nokogiri gem", "Utilized Geocoder gem to parse location information from user input"]}
          url="https://youtube.com/embed/rCtUjN31Phw"
          github="https://github.com/dougschallmoser/hiking-trails-locator-cli-app"
          languages={["ruby"]}
        />
      </div>
    </section>
  )
}

export default Projects;