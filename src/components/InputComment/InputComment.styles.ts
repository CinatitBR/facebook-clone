import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const InputWrapper = styled.div`
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
`

export const InputButtonList = styled.div`
  display: flex;
  flex-direction: row;

  .icon {
    cursor: pointer;
  }  

  .icon img {
    filter: var(--filter-secondary-icon);
  }
`