import styled from 'styled-components'

import { Props, IconWrapperProps } from './Icons'

export const ProfileContainer = styled.img<Props>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
`
export const IconWrapperContainer = styled.div<IconWrapperProps>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};

  display: grid;
  place-items: center;
`