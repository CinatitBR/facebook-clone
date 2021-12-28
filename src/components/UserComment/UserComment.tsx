import { 
  Container,
  ThreadMain,
  ThreadSubMain,
  ThreadLeft,
  ThreadBottom,
  Child
} from './UserComment.styles'

export type Props = {
  level: 0 | 1 | 2 | 3 | 4
  children: React.ReactNode,
  last: boolean
} 

const UserComment = ({ level, children, last }: Props) => {
  return <Container level={level}>
    {(level >= 2 && level < 4) && <ThreadMain level={level} />}
    {(level === 3 && !last) && <ThreadSubMain level={level} />}
    {(level >= 2) && <ThreadLeft level={level} />}
    {(level >= 1 && level < 3 && !last) && <ThreadBottom level={level} />}

    <Child>
      {children}
    </Child>
  </Container>
}


export default UserComment