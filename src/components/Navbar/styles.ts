import styled from 'styled-components';

export const SCNav = styled.section`
  .nav-unscrolled,
  .nav-scrolled {
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    align-items: center;
    z-index: 2;
  }

  .nav-unscrolled {
    padding-top: 28px;
    color: #fff;
    background: none;
    height: 90px;
    transition: 1s ease;
  }

  .nav-scrolled {
    padding-top: 12px;
    background: #fff;
    height: 58px;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.15);
    animation: navTop ease 1s;
    animation-fill-mode: forwards;
  }

  .nav-unscrolled a,
  .nav-scrolled a {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }

  .nav-unscrolled .navlogo a,
  .nav-scrolled .navlogo a {
    font-family: 'Barlow Condensed', sans-serif;
    float: left;
    font-size: 36px;
    margin-left: 3em;
    transition: all 0.3s;
  }

  .nav-unscrolled .navlogo a:hover,
  .nav-scrolled .navlogo a:hover {
    color: #c0a583;
    transition: all 0.3s;
  }

  .nav-unscrolled .navlogo a {
    color: white;
  }

  .nav-scrolled .navlogo a {
    color: #353535;
    background-image: linear-gradient(
      to right,
      #353535,
      #c0a583
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .navlinks {
    padding-right: 4em;
    animation: fadeIn ease 3s;
    animation-fill-mode: forwards;
    animation-delay: 5.5s;
    opacity: 0;
  }

  .navlogo {
    animation: fadeIn ease 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .nav-unscrolled .navlinks a,
  .nav-scrolled .navlinks a {
    float: right;
    margin: 14px 12px 5px 12px;
    padding: 4px 0;
    position: relative;
  }

  .nav-unscrolled .navlinks a {
    color: #fff;
  }

  .nav-scrolled .navlinks a {
    color: #353535;
  }

  .nav-unscrolled .navlinks a:hover,
  .nav-scrolled .navlinks a:hover {
    color: #c0a583;
  }

  .nav-unscrolled .navlinks a:after,
  .nav-scrolled .navlinks a:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #c0a583;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.25s ease-out;
  }

  .nav-unscrolled .navlinks a:hover:after,
  .nav-scrolled .navlinks a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media screen and (max-width: 1200px) {
    .nav-unscrolled .navlogo a,
    .nav-scrolled .navlogo a {
      font-size: 32px;
      margin-left: 1em;
    }
  }

  @media screen and (max-width: 800px) {
    .nav-unscrolled .navlinks, 
    .nav-scrolled .navlinks {
      margin-left: 1.5em;
      padding-right: 0;
      float: left;
    }
  
    .nav-unscrolled,
    .nav-scrolled {
      height: 70px;
    }
  }

  @media screen and (max-width: 600px) {
    .nav-unscrolled .navlinks a, 
    .nav-scrolled .navlinks a {
      margin-top: 0;
    }
  
  }
`