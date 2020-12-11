import React from 'react';
import { ReactIcon, JSIcon, RailsIcon, RubyIcon, ReduxIcon, PostgresIcon, CSSIcon, HTMLIcon, PSIcon } from './SkillsIcons';

const Skills = () => {
  return (
    <div className="about-icons">
      <div id="about-skills">SKILLS THAT KEEP ME CREATIVE</div>
      <ReactIcon cssName="about-icon" />
      <JSIcon cssName="about-icon" />
      <RailsIcon cssName="about-icon" />
      <RubyIcon cssName="about-icon" />
      <ReduxIcon cssName="about-icon" />
      <PostgresIcon cssName="about-icon" />
      <CSSIcon cssName="about-icon" />
      <HTMLIcon cssName="about-icon" />
      <PSIcon cssName="about-icon" />
    </div>
  )
}

export default Skills;