import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as LikeColoredSvg} from '../../assets/like-colored.svg'

import { 
  Container,
  Content,
  AuthorName,
  TextWrapper,
  LikeCountWrapper,
  ActionButtons,
  ThreadMain,
  ThreadSubMain,
  ThreadLeft,
  ThreadBottom
} from './UserComment.styles'

export type Props = {
  comment: {
    authorPicSrc: string,
    authorName: string,
    text: string,
    likeCount: number,
    createdAt: string,
    level: 0 | 1 | 2 | 3 | 4
  }
} 

const UserComment = ({ comment }: Props) => {
  const size = (comment.level >= 2) ? 24 : 32

  return <Container level={comment.level}>
    {(comment.level >= 2 && comment.level < 4) && <ThreadMain level={comment.level} />}
    {(comment.level === 3) && <ThreadSubMain level={comment.level} />}
    {(comment.level >= 2) && <ThreadLeft level={comment.level} />}
    {(comment.level >= 1 && comment.level < 3) && <ThreadBottom level={comment.level} />}


    <ProfileIcon 
      src={comment.authorPicSrc} 
      className="profileIcon" 
      size={size}
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
}


export default UserComment