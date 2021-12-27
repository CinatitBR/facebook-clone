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
  ThreadLeft,
  ThreadBottom
} from './UserComment.styles'

export type Props = {
  data: {
    authorPicSrc: string,
    authorName: string,
    text: string,
    likeCount: number,
    createdAt: string
  },
  level?: 0 | 1 | 2 | 3 | 4
} 

const UserComment = ({ data, level = 0 }: Props) => {
  const size = (level >= 2) ? 24 : 32

  return <Container level={level}>
    {(level >= 2 && level < 4) && <ThreadMain />}
    {(level >= 2) && <ThreadLeft />}
    {(level >= 1 && level < 3) && <ThreadBottom />}

    <ProfileIcon 
      src={data.authorPicSrc} 
      className="profileIcon" 
      size={size}
    />

    <div className="right">
      <Content>
        <AuthorName>{data.authorName}</AuthorName>

        <TextWrapper>{data.text}</TextWrapper>

        <LikeCountWrapper>
          <LikeColoredSvg /> <span>{data.likeCount}</span>
        </LikeCountWrapper>
      </Content>

      <ActionButtons>
        <span>Like</span>&nbsp;·&nbsp;
        <span>Reply</span>&nbsp;·&nbsp;
        <span style={{ fontWeight: 400 }}>{data.createdAt}</span>
      </ActionButtons>
    </div>
  </Container>
}


export default UserComment