import styled from 'styled-components'

export const Container = styled.article`
  .top header {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .top .divider {
    width: 100%;
    height: 1px;
    background-color: var(--divider);
    margin-top: 12px;
  }

  .input {
    width: 100%;
    background-color: var(--gray-6);
    color: var(--secondary-text);
    padding: 8px 12px;
    font-size: 1.0625rem;
    min-height: 40px;
    border-radius: 20px;
    transition: background-color 0.2s ease;
    cursor: pointer;
  }

  .input:hover {
    background-color: var(--comment-background);
  }

  .bottom {
    margin-top: 4px;

    display: flex;
    flex-direction: row;
  }

  .bottom button {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    transition: background-color 0.2s ease;

    color: var(--secondary-text);
    font-weight: 600;
    font-size: .9375rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .bottom button:hover {
    background-color: var(--secondary-button-background);
  }

  .bottom button svg {
    width: 24px;
    height: 24px;
  }
`