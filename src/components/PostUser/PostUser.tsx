import { ProfileIcon } from '../Icons/Icons'
import {ReactComponent as PublicIcon} from '../../assets/public-icon.svg'
import {ReactComponent as LikeColoredSvg } from '../../assets/like-colored.svg'
import likeImg from '../../assets/like-icon.png'
import commentImg from '../../assets/comment-icon.png'
import verifiedIcon from '../../assets/verified-icon.png'

import { Container } from './PostUser.styles'

interface Props {
  profileImageSrc: string,
  creator: string,
  verified?: boolean,
  createdAt: string,
  isPrivate?: string,
  text: string,
  postImageSrc?: string
}

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
    <header className="padding">
      <ProfileIcon src={profileImageSrc} />

      <div className="info">
        <div className="top">
          <span className="creator">
            <a href="#">{creator}</a>
          </span> 

          {verified && <img src={verifiedIcon} alt="verified" className="badge"></img>}
        </div>

        <div className="bottom">
          <a href="#">{createdAt}</a> · {!isPrivate && 
            <PublicIcon fill="var(--secondary-icon)" />
          }
        </div>
      </div>
    </header>

    <div className="text padding">
      {text}
    </div>
    
    {postImageSrc &&
      <a href="#" className="postImageWrapper">
        <img src={postImageSrc} alt="Post" />
      </a>
    }

    <div className="postInfo padding">
      <div className="left">
        <LikeColoredSvg width={18} /> <span>528</span>
      </div>

      <div className="right">
        <span className="commentCount">721 comments</span>
        <span className="shareCount">12 shares</span>
      </div>
    </div>

    <div className="actionButtons padding">
      <button>
        <img src={likeImg} alt="Like" /> Like
      </button>

      <button>
        <img src={commentImg} alt="Like" /> Like
      </button>

      <button>
        <img src={likeImg} alt="Like" /> Like
      </button>
    </div>
  </Container>
)

export default PostUser
