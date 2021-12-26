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
  children: React.ReactNode
  size?: number,
  backgroundColor?: string
  className?: string
}

export const IconWrapper = ({ 
  children, 
  size = 36, 
  backgroundColor = 'var(--secondary-button-background)',
  className
} : IconWrapperProps) => (
  <IconWrapperContainer 
    size={size} 
    backgroundColor={backgroundColor}
    className={className} 
  >
    {children}
  </IconWrapperContainer>
)