import styled from 'styled-components'
import { Props } from './LinkList'

export const Container = styled.div<Props>`
  height: 100%;

  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.column ? 'flex-start' : 'center'};
  align-items: center;
  gap: ${props => props.column ? '0px' : '8px'};
`