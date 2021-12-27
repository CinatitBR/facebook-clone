import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as PublicIcon} from '../../assets/public-icon.svg'
import {ReactComponent as LikeColoredSvg } from '../../assets/like-colored.svg'
import { ReactComponent as SortDownSvg } from '../../assets/sort-down-icon.svg'
import likeImg from '../../assets/like-icon.png'
import commentImg from '../../assets/comment-icon.png'
import shareImg from '../../assets/share-icon.png'
import verifiedIcon from '../../assets/verified-icon.png'
import profilePic from '../../assets/profile-pic.jpg'
import { IconWrapper } from '../Icons/Icons'
import emojiIcon from '../../assets/emoji-comment.png'
import photoIcon from '../../assets/photo-comment.png'
import gifIcon from '../../assets/gif-comment.png'
import stickerIcon from '../../assets/sticker-comment.png'

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
  InputCommentRow,
  InputComment
} from './PostUser.styles'

interface Props {
  postData: {
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

const InputCommentButton = ({ iconSrc, alt }: { iconSrc: string, alt: string }) => (
  <IconWrapper 
    wrapperSize={32} 
    iconSize={16}
    backgroundColor="inherit"
    backgroundColorHover="var(--hover-overlay)"
    className="icon"
  >
    <img src={iconSrc} alt={alt} />
  </IconWrapper>  
)

const PostUser = ({ 
  postData
}: Props) => (
  <Container>
    <PostUserHeader className="margin">
      <ProfileIcon src={postData.profileImageSrc} />

      <div className="info">
        <div className="top">
          <span className="creator">
            <a href="#">{postData.creatorName}</a>
          </span>

          {postData.verified && 
            <BadgeIcon src={verifiedIcon} alt="Verified" />
          }
        </div>

        <div className="bottom">
          <a href="#">{postData.createdAt}</a> · {!postData.isPrivate && 
            <PublicIcon fill="var(--secondary-icon)" />
          }
        </div>
      </div>
    </PostUserHeader>

    <TextWrapper className="margin">
      {postData.text}
    </TextWrapper>
    
    {postData.postImageSrc &&
      <PostImageWrapper href="#">
        <img src={postData.postImageSrc} alt="Post" />
      </PostImageWrapper>
    }

    <PostInfo className="margin divider">
      <div className="content">
        <div className="left">
          <LikeColoredSvg width={18} /> <span>{postData.likeCount}</span>
        </div>

        <div className="right">
          <span className="commentCount">{postData.commentCount} comments</span>
          <span className="shareCount">{postData.shareCount} shares</span>
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

      <InputCommentRow>
        <ProfileIcon 
          src={profilePic}
          online
        />

        <InputComment>
          <input type="text" placeholder="Write a comment..." />

          <div className="buttons">
            <InputCommentButton 
              iconSrc={emojiIcon}
              alt="Emoji"
            />

            <InputCommentButton 
              iconSrc={photoIcon}
              alt="Emoji"
            />

            <InputCommentButton 
              iconSrc={gifIcon}
              alt="Emoji"
            />

            <InputCommentButton 
              iconSrc={stickerIcon}
              alt="Emoji"
            />
          </div>
        </InputComment>
      </InputCommentRow>

      <span className="seeMore">View comments</span>
    </Footer>
  </Container>
)

export default PostUser
