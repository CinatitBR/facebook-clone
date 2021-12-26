import styled from 'styled-components'
import { Props } from './LinkList'

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
  justify-content: ${props => props.direction === 'column' ? 'flex-start' : 'center'};
  align-items: center;
  gap: ${props => props.direction === 'column' ? '0px' : '8px'};
`