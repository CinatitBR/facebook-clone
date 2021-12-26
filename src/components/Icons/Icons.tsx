import { cloneElement, HTMLAttributes, ImgHTMLAttributes } from 'react'
import { ProfileContainer, IconWrapperContainer } from './Icons.styles'

export interface Props {
  src: string
  size?: number,
  lastSeen?: string,
  online?: boolean
}

export const ProfileIcon = ({ src, size = 36, lastSeen, online } : Props) => (
  <ProfileContainer>
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
  className?: string,
}

export const IconWrapper = ({ 
  children, 
  wrapperSize = 36, 
  iconSize = 20,
  backgroundColor = 'var(--secondary-button-background)',
  className
}: IconWrapperProps) => (
  <IconWrapperContainer 
    wrapperSize={wrapperSize} 
    backgroundColor={backgroundColor}
    className={className} 
  >
    {cloneElement(children, {
      width: iconSize,
      height: iconSize
    })}
  </IconWrapperContainer>
)