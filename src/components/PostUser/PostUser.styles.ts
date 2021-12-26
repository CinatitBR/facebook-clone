import styled from 'styled-components'
import { Container as PostWrapperContainer } from '../PostWrapper/PostWrapper.styles'

export const Container = styled(PostWrapperContainer)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 0;
  padding-top: 12px;

  .padding {
    padding: 0 16px;
  }

  header {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  header a:hover {
    text-decoration: underline;
  }

  header .info .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  header .creator {
    font-weight: 600;
  }

  header .badge {
    width: 12px;
    height: 12px;
  }

  header .info .bottom {
    font-size: .8125rem;
    color: var(--secondary-text);
  }

  /* Post image */
  .postImageWrapper {
    width: 100%;
    background-color: black;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  /* Post info */
  .postInfo {
    color: var(--secondary-text);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .postInfo .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  } 

  .postInfo .left *, 
  .postInfo .right * {
    cursor: pointer;
  }

  .postInfo .left *:hover,
  .postInfo .right *:hover {
    text-decoration: underline;
  }

  .postInfo .right {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .postInfo .right * {
    cursor: pointer;
  }

  /* Action buttons */
  .actionButtons {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .actionButtons button {
    color: var(--secondary-text);
    font-weight: 600;
    font-size: .9375rem;
    width: 100%;
    height: 44px;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .actionButtons img {
    filter: var(--filter-secondary-icon);
  }
`