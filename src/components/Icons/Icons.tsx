import { ProfileContainer } from './Icons.styles'

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