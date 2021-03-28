import styled from 'styled-components';

export const SCBlog = styled.section`
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  width: 100vw;
  position: relative;
  background: #353535;
  padding-top: 10em;
  padding-bottom: 10em;

  @media screen and (max-width: 1200px) {
    clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
    padding-top: 6em;
    padding-bottom: 6em;
  }
`