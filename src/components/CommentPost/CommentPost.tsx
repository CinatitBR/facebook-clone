import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as LikeColoredSvg} from '../../assets/like-colored.svg'

import { 
  Container,
  Content,
  AuthorName,
  TextWrapper,
  LikeCountWrapper,
  ActionButtons
} from './CommentPost.styles'

export type Props = {
  comment: {
    authorPicSrc: string,
    authorName: string,
    text: string,
    likeCount: number,
    createdAt: string,
    level: 0 | 1 | 2 | 3 | 4
  }, 
  picSize?: number
} 

const CommentPost = ({ comment, picSize = 32 }: Props) => {
  return (
    <Container>
      <ProfileIcon 
        src={comment.authorPicSrc} 
        className="profileIcon" 
        size={picSize}
      />

      <div className="right">
        <Content>
          <AuthorName>{comment.authorName}</AuthorName>

          <TextWrapper>{comment.text}</TextWrapper>

          <LikeCountWrapper>
            <LikeColoredSvg /> <span>{comment.likeCount}</span>
          </LikeCountWrapper>
        </Content>

        <ActionButtons>
          <span>Like</span>&nbsp;·&nbsp;
          <span>Reply</span>&nbsp;·&nbsp;
          <span style={{ fontWeight: 400 }}>{comment.createdAt}</span>
        </ActionButtons>
      </div>
    </Container>
  )
}

export default CommentPost
