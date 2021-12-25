import { Container } from './NavSection.styles'

interface Props {
  children: React.ReactNode
  title?: string,
  divider?: boolean
}

const NavSection = ({ children, title, divider } : Props) => (
  <Container>
    {title && 
      <header>{title}</header>
    }

    {children}

    {divider && 
      <div className="divider"></div>
    }
  </Container>
)

export default NavSection
