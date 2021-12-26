import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as PublicIcon} from '../../assets/public-icon.svg'
import {ReactComponent as LikeColoredSvg } from '../../assets/like-colored.svg'
import { ReactComponent as SortDownSvg } from '../../assets/sort-down-icon.svg'
import likeImg from '../../assets/like-icon.png'
import commentImg from '../../assets/comment-icon.png'
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
  profileImageSrc: string,
  creator: string,
  verified?: boolean,
  createdAt: string,
  isPrivate?: string,
  text: string,
  postImageSrc?: string
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
  profileImageSrc, 
  creator, 
  verified, 
  createdAt, 
  isPrivate, 
  text,
  postImageSrc
} : Props) => (
  <Container>
    <PostUserHeader className="margin">
      <ProfileIcon src={profileImageSrc} />

      <div className="info">
        <div className="top">
          <span className="creator">
            <a href="#">{creator}</a>
          </span>

          {verified && 
            <BadgeIcon src={verifiedIcon} alt="Verified" />
          }
        </div>

        <div className="bottom">
          <a href="#">{createdAt}</a> · {!isPrivate && 
            <PublicIcon fill="var(--secondary-icon)" />
          }
        </div>
      </div>
    </PostUserHeader>

    <TextWrapper className="margin">
      {text}
    </TextWrapper>
    
    {postImageSrc &&
      <PostImageWrapper href="#">
        <img src={postImageSrc} alt="Post" />
      </PostImageWrapper>
    }

    <PostInfo className="margin divider">
      <div className="content">
        <div className="left">
          <LikeColoredSvg width={18} /> <span>528</span>
        </div>

        <div className="right">
          <span className="commentCount">721 comments</span>
          <span className="shareCount">12 shares</span>
        </div>
      </div>
    </PostInfo>

    <ActionButtons className="margin divider">
      <button>
        <img src={likeImg} alt="Like" /> Like
      </button>

      <button>
        <img src={commentImg} alt="Like" /> Like
      </button>

      <button>
        <img src={likeImg} alt="Like" /> Like
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
