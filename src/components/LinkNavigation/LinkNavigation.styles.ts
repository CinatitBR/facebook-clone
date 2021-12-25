import styled from 'styled-components'
import LinkItem from '../LinkItem/LinkItem'

export const Container = styled(LinkItem)`
  width: 100%;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px;
  font-weight: 600;

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .content span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 400;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .content span:before {
    display: block;
    content: '';
    width: 7px;
    height: 7px;
    background-color: var(--accent);
    border-radius: 50%;
  }
` 