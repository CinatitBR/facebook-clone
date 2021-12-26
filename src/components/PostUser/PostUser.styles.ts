import styled from 'styled-components'
import { Container as PostWrapperContainer } from '../PostWrapper/PostWrapper.styles'

export const Container = styled(PostWrapperContainer)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 12px 0;

  .margin {
    margin: 0 16px;
  }

  .divider {
    border-bottom: solid 1px var(--divider);
  }
`

export const PostUserHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 8px;

  a:hover {
    text-decoration: underline;
  }

  .info .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  .creator {
    font-weight: 600;
  }

  .info .bottom {
    font-size: .8125rem;
    color: var(--secondary-text);
  }
`

export const TextWrapper = styled.div``

export const BadgeIcon = styled.img`
  width: 12px;
  height: 12px;
`

export const PostImageWrapper = styled.a`
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PostInfo = styled.div`
  color: var(--secondary-text);
  padding: 10px 0;

  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .left *, .right * {
    cursor: pointer;
  }

  .left *:hover,
  .right *:hover {
    text-decoration: underline;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  } 

  .right {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`

export const ActionButtons = styled.div`
  padding-bottom: 4px;

  display: flex;
  flex-direction: row;
  gap: 4px;

  button {
    height: 32px;
    width: 100%;
    padding: 0;
    border-radius: 4px;

    color: var(--secondary-text);
    font-weight: 600;
    font-size: .9375rem;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  img {
    filter: var(--filter-secondary-icon);
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .seeMore {
    color: var(--secondary-text);
    font-weight: 600;
    cursor: pointer;
  }

  .seeMore:hover {
    text-decoration: underline;
  }
`

export const SelectFilter = styled.div`
  font-weight: 600;
  color: var(--secondary-text);
  cursor: pointer;
  margin-left: auto;
  min-height: 28px;
  
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const InputCommentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const InputComment = styled.div`
  width: 100%;
  border-radius: 20px;
  font-size: .9375rem;
  color: var(--primary-text);
  background-color: var(--comment-background);
  padding-left: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 2px;

  display: flex;
  flex-direction: row;

  input {
    color: var(--primary-text);
    font-size: .9375rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }

  .buttons .icon {
    cursor: pointer;
  }  

  .buttons .icon img {
    filter: var(--filter-secondary-icon);
  }
`