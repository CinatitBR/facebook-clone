import { Container } from './LinkItem.styles'

export interface Props {
  children: React.ReactNode, 
  className?: string,
}

const LinkItem = ({ children, className } : Props) => (
  <Container href="#" className={className}>
    {children}
  </Container>
)

export default LinkItem