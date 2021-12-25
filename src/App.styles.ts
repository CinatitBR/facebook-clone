import styled from 'styled-components'
import profilePic from './assets/profile-pic.jpg'

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  .mainContent {
    padding: 16px 8px;

    display: flex;
    flex-direction: row;
  }

  .feed {
    width: min(740px, 100%);
    padding: 0 32px;
  }
`

export const LeftNavigation = styled.aside`
  width: min(300px, 100%);

  display: flex;
  flex-direction: column;
  gap: 16px;

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

  .groupIcon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
`