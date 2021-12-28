import { ProfileIcon } from '../Icons/Icons'
import InputComment from '../InputComment/InputComment'
import CommentThread from '../CommentThread/CommentThread'

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

const commentThread = [
  {
    authorName: 'Bruno Oliveira',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'Nunes x Cyborg',
    createdAt: '2d',
    level: 1 as const
  },
  {
    authorName: 'Castor dinâmico',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'Que batalha ia ser, mas acho a Amanda sairia com a vitória.',
    createdAt: '1d',
    level: 2 as const
  },
  {
    authorName: 'Luis henrique',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'A não sei não em, mas daria uma boa luta',
    createdAt: '2d',
    level: 2 as const
  },
  {
    authorName: 'Tadeu Alcântara kkkkk',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'acredito que numa revanche, Ciborg acabaria com a Amanda, protegida do Dana ....',
    createdAt: '2d',
    level: 3 as const
  },
  {
    authorName: 'Mais Um Nome Aleatório',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'Não sei ainda',
    createdAt: '2d',
    level: 3 as const
  },
  {
    authorName: 'Igão da silva',
    authorPicSrc: authorPic,
    likeCount: 46,
    text: 'Esse seria o último',
    createdAt: '2d',
    level: 3 as const
  }
]

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
    </Footer>

    <CommentList>
      <CommentThread
        commentThread={commentThread}
      />
    </CommentList>
  </Container>
)

export default PostUser
