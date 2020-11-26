import React from 'react';
import Project from './Project';

const Projects = () => {

  return (
    <section className="projects">
      <div id="projects-header">PROJECTS</div>
      <hr />
      <div className="projects-grid">
        <Project title="TRAILBLAZE" snippet="Geosocial networking SPA for finding and communicating with new friends in the outdoor adventure space" />
        <Project title="GASTROPODA" snippet="Social SPA literary magazine for showcasing, submitting, and interacting with unique short stories" />
        <Project title="CONNECTAROT" snippet="Interactive MPA for user and computer generated tarot card readings" />
        <Project title="NATPARKREV" snippet="MPA for sharing user generated National Park reviews with the world" />
        <Project title="HIKINGLOCATOR" snippet="CLI application for locating hiking trails in the US" />
      </div>
    </section>
  )
}

export default Projects;