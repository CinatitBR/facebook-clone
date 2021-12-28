import UserComment, { Props as UserCommentProps } from '../UserComment/UserComment'
import { Container } from './CommentThread.styles'

type Props = {
  commentThread: UserCommentProps['comment'][]
}

const CommentThread = ({ commentThread }: Props) => {
  return (
    <Container>
      {commentThread.map((comment, index) => {
        let last: boolean = false

        const threadLength = commentThread.length
        const lastIndex = threadLength - 1
        const nextComment = commentThread[index + 1]
        const nextCommentLevel = nextComment?.level

        // If comment is the last in commentThread
        if (index === lastIndex) {
          last = true
        } 
        // If next comment has a smaller level
        else if (nextCommentLevel < comment.level) {
          last = true
        }
        else if (nextCommentLevel === comment.level && nextCommentLevel !== 3) {
          last = true
        }

        return (
          <UserComment 
            comment={comment}
            last={last}
          />
        )
      })}
    </Container>
  )
}

export default CommentThread
