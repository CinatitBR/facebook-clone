import UserComment, { Props as UserCommentProps } from '../UserComment/UserComment'
import { Container } from './CommentThread.styles'

type Props = {
  commentThread: UserCommentProps['comment'][]
}

const CommentThread = ({ commentThread }: Props) => {
  return (
    <Container>
      {commentThread.map(comment => (
        <UserComment 
          comment={comment}
        />
      ))}
    </Container>
  )
}

export default CommentThread
