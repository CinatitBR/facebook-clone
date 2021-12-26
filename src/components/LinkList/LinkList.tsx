import { Container } from './LinkList.styles'

export interface Props {
  children: React.ReactNode,
  direction?: 'column' | 'row',
  className?: string
}

const LinkList = ({ children, direction = 'row', className } : Props) => (
  <Container direction={direction} className={className}>
    {children}
  </Container>
) 


export default LinkList