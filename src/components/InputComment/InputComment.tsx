import { IconWrapper } from '../Icons/Icons'
import { ProfileIcon } from '../Icons/Icons'

import { Container, InputWrapper, InputButtonList } from './InputComment.styles'

import profilePic from '../../assets/profile-pic.jpg'
import emojiIcon from '../../assets/emoji-comment.png'
import photoIcon from '../../assets/photo-comment.png'
import gifIcon from '../../assets/gif-comment.png'
import stickerIcon from '../../assets/sticker-comment.png'

const InputButton = ({ iconSrc, alt }: { iconSrc: string, alt: string }) => (
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

const InputComment = ({ placeholder }: { placeholder: string }) => (
  <Container>
    <ProfileIcon 
      src={profilePic}
      online
    />

    <InputWrapper>
      <input type="text" placeholder={placeholder} />

      <InputButtonList>
        <InputButton 
          iconSrc={emojiIcon}
          alt="Add emoji"
        />

        <InputButton 
          iconSrc={photoIcon}
          alt="Add photo or video"
        />

        <InputButton 
          iconSrc={gifIcon}
          alt="Add gif"
        />

        <InputButton 
          iconSrc={stickerIcon}
          alt="Add sticker"
        />
      </InputButtonList>
    </InputWrapper>
  </Container>
)

export default InputComment
