import { Container } from './LinkNavigation.styles'

interface Props {
  icon: React.ReactNode,
  title: string,
  description?: string
}

const LinkNavigation = ({ icon, title, description } : Props) => (
  <Container>
    {icon}

    <div className="content">
      {title}

      {description && 
        <span>{description}</span>
      }
    </div>
  </Container>
)

export default LinkNavigation