import styled, { css } from 'styled-components'

export const Container = styled.article<{ level: number }>`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 8px;

  .right {
    max-width: calc(100% - 26px);
  }

  /* Comment level 2 or 3 */
  ${props => props.level >= 2 && css`
    .profileIcon {
      padding-left: 6px;
      margin-top: 8px;
    }
  `}
`

export const Content = styled.div`
  background-color: var(--comment-background);
  border-radius: 18px;
  color: var(--primary-text);
  padding: 8px 12px;

  position: relative;
`

export const AuthorName = styled.a`
  font-size: .8125rem;
  font-weight: 600;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`

export const TextWrapper = styled.div`
  font-size: .9375rem;
`

export const LikeCountWrapper = styled.div`
  background-color: var(--popover-background);
  font-size: .8125rem;
  color: var(--secondary-text);
  padding: 2px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 var(--shadow-2);
  cursor: pointer;

  display: flex;
  flex-direction: row;
  place-items: center;
  gap: 4px;

  position: absolute;
  bottom: -15px;
  right: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const ActionButtons = styled.div`
  font-weight: bold;
  color: var(--secondary-text);
  font-size: 12px;
  margin-left: 12px;

  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`