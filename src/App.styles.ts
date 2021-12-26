import styled from 'styled-components'

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

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .chevronIconWrapper {
    width: 36px;
    height: 36px;
    background-color: var(--secondary-button-background);
    border-radius: 50%;

    display: grid;
    place-items: center;
  }
  
  .chevronIconWrapper svg {
    fill: var(--primary-text);
    width: 20px;
    height: 20px;
  }

  .groupIcon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }

  .createRoomButton {
    font-size: .9375rem;
    color: var(--blue-link);
    font-weight: 600;
    
    height: 40px;
    padding: 0px 12px;
    border-radius: 20px;
    border: 2px solid var(--primary-deemphasized-button-background);

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .imgAds {
    max-width: 125px;
    border-radius: 8px;
  }
`

export const SideNavigation = styled.aside`
  width: min(300px, 100%);

  display: flex;
  flex-direction: column;
  gap: 16px;
`