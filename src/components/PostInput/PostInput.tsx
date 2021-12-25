import PostWrapper from '../PostWrapper/PostWrapper'
import { ProfileIcon } from '../Icons/Icons'
import ProfileImg from '../../assets/profile-pic.jpg'
import { ReactComponent as LiveVideoSvg } from '../../assets/live-video-icon.svg'
import { ReactComponent as PhotoVideoSvg } from '../../assets/photo-video-icon.svg'
import { ReactComponent as HappySvg } from '../../assets/happy-icon.svg'

import { Container } from './PostInput.styles'

const PostInput = () => (
  <PostWrapper>
    <Container>
      <div className="top">
        <header>
          <ProfileIcon 
            src={ProfileImg}
          />

          <div className="input">
            What's on your mind, Jacinto?
          </div>
        </header>

        <div className="divider"></div>
      </div>

      <div className="bottom">
        <button>
          <LiveVideoSvg fill="var(--base-cherry)" /> Live video
        </button>

        <button>
          <PhotoVideoSvg fill="var(--base-lime)" /> Live video
        </button>

        <button>
          <HappySvg fill="var(--base-lemon)" /> Live video
        </button>
      </div>
    </Container>
  </PostWrapper>
)

export default PostInput
