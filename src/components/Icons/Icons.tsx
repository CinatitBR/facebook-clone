import { cloneElement } from 'react'
import { ProfileContainer, IconWrapperContainer } from './Icons.styles'

export interface Props {
  src: string
  size?: number,
  lastSeen?: string,
  online?: boolean,
  className?: string
}

export const ProfileIcon = ({ src, size = 36, lastSeen, online, className } : Props) => (
  <ProfileContainer className={className}>
    <img 
      src={src} 
      alt="Profile pic" 
      width={size}
      height={size}
    />

    {lastSeen && 
      <span className="lastSeen">
        {lastSeen}
      </span>
    }

    {online &&
      <span className="onlineSymbol"></span>
    }
  </ProfileContainer>
)

export interface IconWrapperProps {
  children: React.ReactSVGElement | JSX.Element,
  wrapperSize?: number,
  iconSize?: number
  backgroundColor?: string
  backgroundColorHover?: string
  className?: string,
}

export const IconWrapper = ({ 
  children, 
  wrapperSize = 36, 
  iconSize = 20,
  backgroundColor = 'var(--secondary-button-background)',
  backgroundColorHover,
  className
}: IconWrapperProps) => (
  <IconWrapperContainer 
    wrapperSize={wrapperSize} 
    backgroundColor={backgroundColor}
    backgroundColorHover={backgroundColorHover}
    className={className} 
  >
    {cloneElement(children, {
      width: iconSize,
      height: iconSize
    })}
  </IconWrapperContainer>
)