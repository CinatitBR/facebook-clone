import styled, { css } from 'styled-components'

import { IconWrapperProps } from './Icons'

export const ProfileContainer = styled.div`
  position: relative;
  display: inline;

  img {
    border-radius: 50%;
  }

  .lastSeen, .onlineSymbol {
    border: solid 2px var(--web-wash);
  }
  
  .lastSeen {
    font-size: .625rem;
    font-weight: bold;
    color: var(--positive);
    background-color: var(--positive-background);
    padding: 2px;
    border-radius: 14px;

    position: absolute;
    right: -4px;
    bottom: -4px;
  }

  .onlineSymbol {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--positive);
    position: absolute;
    right: 0px;
    bottom: 4px;
  }
`

export const IconWrapperContainer = styled.div<IconWrapperProps>`
  width: ${props => `${props.wrapperSize}px`};
  height: ${props => `${props.wrapperSize}px`};
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  transition: background-color 0.2s ease;

  display: grid;
  place-items: center;

  ${props => props.backgroundColorHover && css`
    :hover { 
      background-color: ${props.backgroundColorHover};
    }
  `}
`