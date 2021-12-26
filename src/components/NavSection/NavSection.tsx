import { Container } from './NavSection.styles'
import LinkList from '../LinkList/LinkList'

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

    <LinkList direction="column">
      {children}
    </LinkList>

    {divider && 
      <div className="divider"></div>
    }
  </Container>
)

export default NavSection
