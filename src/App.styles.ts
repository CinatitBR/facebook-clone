import styled from 'styled-components'

export const Container = styled.main`
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

  .imgAds {
    max-width: 125px;
    border-radius: 8px;
  }
`

export const MainContent = styled.section`
  margin-top: var(--header-height);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`

export const Feed = styled.section`
  width: min(740px, 100%);
  padding: 16px 32px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CreateRoomButton = styled.button`
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
`

export const SideNavigation = styled.aside`
  width: min(300px, 100%);
  padding: 16px 8px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: sticky;
  top: var(--header-height);
`