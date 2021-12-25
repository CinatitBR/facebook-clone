import { Container } from './PostWrapper.styles'

interface Props {
  children: React.ReactNode
}

const PostWrapper = ({ children } : Props) => (
  <Container>
    {children}
  </Container>
)

export default PostWrapper
