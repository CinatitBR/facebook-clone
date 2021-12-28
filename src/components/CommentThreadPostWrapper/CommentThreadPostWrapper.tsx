import { 
  Container,
  ThreadLineMain,
  ThreadLineSubMain,
  ThreadLineLeft,
  ThreadLineBottom,
  Child
} from './CommentThreadPostWrapper.styles'

export type Props = {
  level: 0 | 1 | 2 | 3 | 4
  children: React.ReactNode,
  last: boolean
} 

const CommentThreadPostWrapper = ({ level, children, last }: Props) => {
  return <Container level={level}>
    {(level >= 2 && level < 4) && <ThreadLineMain level={level} />}
    {(level === 3 && !last) && <ThreadLineSubMain level={level} />}
    {(level >= 2) && <ThreadLineLeft level={level} />}
    {(level >= 1 && level < 3 && !last) && <ThreadLineBottom level={level} />}

    <Child>
      {children}
    </Child>
  </Container>
}


export default CommentThreadPostWrapper