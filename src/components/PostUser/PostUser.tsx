import { ProfileIcon } from '../Icons/Icons'
import InputComment from '../InputComment/InputComment'
import UserComment from '../UserComment/UserComment'

import {ReactComponent as PublicIcon} from '../../assets/public-icon.svg'
import {ReactComponent as LikeColoredSvg } from '../../assets/like-colored.svg'
import { ReactComponent as SortDownSvg } from '../../assets/sort-down-icon.svg'
import likeImg from '../../assets/like-icon.png'
import commentImg from '../../assets/comment-icon.png'
import shareImg from '../../assets/share-icon.png'
import verifiedIcon from '../../assets/verified-icon.png'
import authorPic from '../../assets/author-pic.jpg'

import { 
  Container, 
  PostImageWrapper,
  PostInfo, 
  ActionButtons, 
  PostUserHeader, 
  BadgeIcon,
  TextWrapper,
  Footer,
  SelectFilter,
  CommentList
} from './PostUser.styles'

interface Props {
  data: {
    profileImageSrc: string,
    creatorName: string,
    verified: boolean,
    createdAt: string,
    isPrivate: boolean,
    text: string,
    postImageSrc?: string,
    likeCount: number,
    commentCount: number,
    shareCount: number
  }
}

const PostUser = ({ 
  data
}: Props) => (
  <Container>
    <PostUserHeader className="margin">
      <ProfileIcon src={data.profileImageSrc} />

      <div className="info">
        <div className="top">
          <span className="creator">
            <a href="#">{data.creatorName}</a>
          </span>

          {data.verified && 
            <BadgeIcon src={verifiedIcon} alt="Verified" />
          }
        </div>

        <div className="bottom">
          <a href="#">{data.createdAt}</a> · {!data.isPrivate && 
            <PublicIcon fill="var(--secondary-icon)" />
          }
        </div>
      </div>
    </PostUserHeader>

    <TextWrapper className="margin">
      {data.text}
    </TextWrapper>
    
    {data.postImageSrc &&
      <PostImageWrapper href="#">
        <img src={data.postImageSrc} alt="Post" />
      </PostImageWrapper>
    }

    <PostInfo className="margin divider">
      <div className="content">
        <div className="left">
          <LikeColoredSvg width={18} /> <span>{data.likeCount}</span>
        </div>

        <div className="right">
          <span className="commentCount">{data.commentCount} comments</span>
          <span className="shareCount">{data.shareCount} shares</span>
        </div>
      </div>
    </PostInfo>

    <ActionButtons className="margin divider">
      <button>
        <img src={likeImg} alt="Like" /> Like
      </button>

      <button>
        <img src={commentImg} alt="Comment" /> Comment
      </button>

      <button>
        <img src={shareImg} alt="Share" /> Share
      </button>
    </ActionButtons>

    <Footer className="margin">
      <SelectFilter>
        Most relevant <SortDownSvg />
      </SelectFilter>

      <InputComment placeholder="Write a comment..." />
      <span className="seeMore">View comments</span>

      <CommentList>
        <UserComment 
          data={{
            authorName: "Luis Henrique",
            authorPicSrc: authorPic,
            likeCount: 46,
            text: 'Ja acho que Cyborg leva',
            createdAt: '2d'
          }} 
        />
      </CommentList>
    </Footer>
  </Container>
)

export default PostUser
