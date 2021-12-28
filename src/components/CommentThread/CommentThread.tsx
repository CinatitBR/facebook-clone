// import UserComment, { Props as UserCommentProps } from '../UserComment/UserComment'
import UserComment from '../UserComment/UserComment'
import CommentPost, { Props as UserCommentProps } from '../CommentPost/CommentPost'
import InputComment from '../InputComment/InputComment'

import { Container } from './CommentThread.styles'

type Props = {
  commentThread: UserCommentProps['comment'][]
}

const CommentThread = ({ commentThread }: Props) => {
  return (
    <Container>
      {commentThread.map((comment, index) => {
        let last: boolean = false

        const picSize = (comment.level >= 2) ? 24 : 32
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
            level={comment.level}
            last={last}
          >
            <CommentPost 
              comment={comment}
              picSize={picSize}
            />
          </UserComment>
        )
      })}

      <UserComment level={2} last={true}>
        <InputComment 
          placeholder={`Reply to ${commentThread[0].authorName}`} 
          picSize={24}
        />
      </UserComment>
    </Container>
  )
}

export default CommentThread
