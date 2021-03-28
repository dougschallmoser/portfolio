import styled from 'styled-components';

export const SCSkills = styled.section`
  width: 100vw;
  position: relative;
  background: #353535;
  padding-top: 4em;
  padding-bottom: 8em;

  clip-path: polygon(0 0%, 100% 15%, 100% 100%, 0 85%);

  @media screen and (max-width: 800px) {
    clip-path: polygon(0 0%, 100% 3%, 100% 100%, 0 97%);
  }
`