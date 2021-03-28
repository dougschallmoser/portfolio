import { 
  ReactIcon,
  TSIcon,
  JSIcon,
  RailsIcon,
  RubyIcon,
  ReduxIcon,
  PostgresIcon,
  CSSIcon, 
  HTMLIcon,
  PSIcon
  } from './SkillsIcons';
import Fade from 'react-reveal/Fade';
import { SCSkills } from './styles';

const Skills = (): JSX.Element => {
  return (
    <Fade>
      <SCSkills>
        <div className="about-icons">
          <div id="about-skills">SKILLS THAT KEEP ME CREATIVE</div>
          <ReactIcon cssName="about-icon" />
          <TSIcon cssName="about-icon" />
          <JSIcon cssName="about-icon" />
          <RailsIcon cssName="about-icon" />
          <RubyIcon cssName="about-icon" />
          <ReduxIcon cssName="about-icon" />
          <PostgresIcon cssName="about-icon" />
          <CSSIcon cssName="about-icon" />
          <HTMLIcon cssName="about-icon" />
          <PSIcon cssName="about-icon" />
        </div>
      </SCSkills>
    </Fade>
  )
}

export { Skills };