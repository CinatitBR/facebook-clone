import styled from 'styled-components'
import profilePic from './assets/profile-pic.jpg'

export const LeftNavigation = styled.aside`
  width: min(300px, 100%);
  padding: 16px 8px;

  .iconWrapper {
    width: 36px;
    height: 36px;
    background-color: var(--secondary-button-background);
    border-radius: 50%;

    display: grid;
    place-items: center;
  }
  
  .iconWrapper svg {
    fill: var(--primary-text);
    width: 20px;
    height: 20px;
  }

  .profilePic {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: url(${profilePic});
    background-size: cover;
    background-position: center;
  }
`