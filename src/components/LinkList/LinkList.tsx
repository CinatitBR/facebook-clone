import { Container } from './LinkList.styles'

export interface Props {
  children: React.ReactNode,
  direction?: 'column' | 'row'
}

const LinkList = ({ children, direction = 'row' } : Props) => (
  <Container direction={direction}>
    {children}
  </Container>
) 


export default LinkList