import styled from 'styled-components'

import { Props } from './Icons'

export const ProfileContainer = styled.img<Props>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
`