import { ProfileContainer, IconWrapperContainer } from './Icons.styles'

export interface Props {
  src: string
  size?: number
}

export const ProfileIcon = ({ src, size = 36 } : Props) => (
  <ProfileContainer 
    src={src}
    alt="Profile pic"
    size={size}
  />
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