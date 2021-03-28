import styled from 'styled-components';
import image from './splash2.jpg';

export const SCFooter = styled.section`
  background: url(${image}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: left;
  background-repeat: no-repeat;
  width: 100vw;
  height: 30vh;
  margin-top: 25px;

  @media screen and (max-width: 800px) {
    background-attachment: scroll;
  }
`