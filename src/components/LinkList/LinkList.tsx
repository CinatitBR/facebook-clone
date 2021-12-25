import { Container } from './LinkList.styles'

export interface Props {
  children: React.ReactNode,
  column?: boolean
}

const LinkList = ({ children, column } : Props) => (
  <Container column={column}>
    {children}
  </Container>
) 


export default LinkList