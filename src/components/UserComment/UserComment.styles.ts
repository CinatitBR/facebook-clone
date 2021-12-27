import styled from "styled-components";

export const Container = styled.article`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 8px;

  .right {
    max-width: calc(100% - 26px);
  }
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

  display: flex;
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
`