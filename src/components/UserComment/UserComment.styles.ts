import styled, { css } from 'styled-components'

export const Container = styled.article<{ level: number }>`
  width: 100%;
  padding-top: 4px;
  padding-left: 16px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 8px;

  .right {
    max-width: calc(100% - 26px);
  }

  ${props => props.level > 1 && css`
    padding-left: 54px;

    .profileIcon {
      padding-left: 6px;
      margin-top: 8px;
    }
  `}
`

export const ThreadMain = styled.div`
  background-color: var(--comment-background);
  display: block;
  width: 2px;
  height: 100%;

  position: absolute;
  left: 30px;
`

export const ThreadLeft = styled.div<{ subComment?: boolean }>`
  display: none;
  display: block;
  width: 24px;
  height: 20px;

  border-bottom-left-radius: 10px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-top-color: var(--comment-background);
  border-right-color: var(--comment-background);
  border-left-style: solid;
  border-left-color: var(--comment-background);
  border-bottom-color: var(--comment-background);
  border-left-width: 2px;

  position: absolute;
  left: 30px;
`

export const ThreadBottom = styled.div<{ subComment?: boolean }>`
  display: none;
  background-color: var(--comment-background);

  display: block;
  width: 2px;
  height: 100%;

  position: absolute;
  left: 30px;
  top: 43px;
  /* left: 71px; */
  /* top: 40px; */
`

export const Content = styled.div<{ subComment?: boolean }>`
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