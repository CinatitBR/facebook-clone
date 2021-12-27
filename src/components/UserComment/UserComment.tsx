import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as LikeColoredSvg} from '../../assets/like-colored.svg'

import { 
  Container,
  Content,
  AuthorName,
  TextWrapper,
  LikeCountWrapper,
  ActionButtons
} from './UserComment.styles'

interface Props {
  data: {
    authorPicSrc: string,
    authorName: string,
    text: string,
    likeCount: number,
    createdAt: string
  }
}

const UserComment = ({ data }: Props) => (
  <Container>
    <ProfileIcon src={data.authorPicSrc} />

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
)


export default UserComment