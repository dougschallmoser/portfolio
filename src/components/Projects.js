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
          languages={["react", "redux", "javascript", "rails", "ruby", "css", "html"]}
        />
        <Project title="GASTROPODA" snippet="Social SPA literary magazine for showcasing, submitting, and interacting with unique short stories" />
        <Project title="CONNECTAROT" snippet="Interactive MPA for user and computer generated tarot card readings" />
        <Project title="NATPARKREV" snippet="MPA for sharing user generated National Park reviews with the world" />
        <Project title="HIKINGLOCATOR" snippet="CLI application for locating hiking trails in the U.S." />
      </div>
    </section>
  )
}

export default Projects;