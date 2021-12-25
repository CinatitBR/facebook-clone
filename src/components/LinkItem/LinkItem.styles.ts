import styled from 'styled-components'
import { Props } from './LinkItem'

export const Container = styled.a<Props>`
  height: 100%;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  :hover {
    background-color: var(--secondary-button-background)
  }
`
