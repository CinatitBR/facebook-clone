import LinkNavigation from './components/LinkNavigation/LinkNavigation'
import Header from './components/Header/Header'
import NavSection from './components/NavSection/NavSection'
import FriendsImg from './assets/friends-colored.png'
import GroupsImg from './assets/groups-colored.png'
import MarketplaceImg from './assets/marketplace-colored.png'
import WatchImg from './assets/watch-colored.png'
import MemoriesImg from './assets/memories-colored.png'
import { ReactComponent as ChevronIcon } from './assets/chevron-icon.svg'
import group1Img from './assets/group-1.png'
import group2Img from './assets/group-2.png'
import group3Img from './assets/group-3.png'
import group4Img from './assets/group-4.jpg'
import group5Img from './assets/group-5.jpg'
import PostInput from './components/PostInput/PostInput'
import PostWrapper from './components/PostWrapper/PostWrapper'
import profilePic from './assets/profile-pic.jpg'
import { ProfileIcon } from './components/Icons/Icons'
import ads1Img from './assets/ads-1.jpg'
import ads2Img from './assets/ads-2.jpg'
import profilePic2 from './assets/profile-pic-2.jpg'
import { IconWrapper } from './components/Icons/Icons'
import plusIcon from './assets/plus-icon.png'
import createRoomIcon from './assets/create-room-icon.png'
import PostUser from './components/PostUser/PostUser'
import profilePic3 from './assets/profile-pic-3.jpg'
import postImage1 from './assets/post-image-1.jpg'

import { 
  Container, 
  SideNavigation, 
  Feed, 
  CreateRoomButton, 
  MainContent, 
  GroupIcon, 
  AdsImage 
} from './App.styles'

const App = () => (
  <Container>
    <Header />

    <MainContent>
      {/* Left Navigation */}
      <SideNavigation>
        <NavSection divider>
          <LinkNavigation 
            icon={<ProfileIcon src={profilePic} />}
            title="Jacinto Silva"
          />

          <LinkNavigation 
            icon={<img src={FriendsImg} alt="Friends icon" />}
            title="Find Friends"
          />

          <LinkNavigation 
            icon={<img src={GroupsImg} alt="Groups icon" />}
            title="Groups"
            description="1 new"
          />

          <LinkNavigation 
            icon={<img src={MarketplaceImg} alt="Marketplace icon" />}
            title="Marketplace"
            description="1 new"
          />

          <LinkNavigation 
            icon={<img src={WatchImg} alt="Watch icon" />}
            title="Watch"
            description="9+ new videos"
          />

          <LinkNavigation 
            icon={<img src={MemoriesImg} alt="Memories icon" />}
            title="Memories"
          />

          <LinkNavigation 
            icon={
              <IconWrapper iconSize={20}>
                <ChevronIcon />
              </IconWrapper>
            }
            title="See more"
          />
        </NavSection>

        <NavSection title="Your Shortcuts">
          <LinkNavigation
            icon={<GroupIcon src={group1Img} alt="Group" />}
            title="Minecraft"
          /> 

          <LinkNavigation
            icon={<GroupIcon src={group2Img} alt="Group" />}
            title="Agar.io"
          />

          <LinkNavigation
            icon={<GroupIcon src={group3Img} alt="Group" />}
            title="Candy Crush"
          />

          <LinkNavigation
            icon={<GroupIcon src={group4Img} alt="Group" />}
            title="Dragon City"
          /> 

          <LinkNavigation
            icon={<GroupIcon src={group5Img} alt="Group" />}
            title="N.W.A"
          />  
        </NavSection>
      </SideNavigation>

      <Feed>
        <PostInput />

        <PostWrapper>
          <CreateRoomButton>
            <img src={createRoomIcon} alt="Create room" /> Create room
          </CreateRoomButton>
        </PostWrapper>

        <PostUser 
          data={{
            creatorName: 'UFC',
            profileImageSrc: profilePic3,
            createdAt: 'Yesterday at 8:20 PM',
            text: 'Se você pudessse pedir uma luta de presente de Natal, qual seria?',
            postImageSrc: postImage1,
            verified: true,
            isPrivate: false,
            likeCount: 528,
            commentCount: 721,
            shareCount: 12
          }}
        />
      </Feed>
      
      {/* Right Navigation */}
      <SideNavigation>  
        <NavSection title="Sponsored" divider>
          <LinkNavigation
            icon={<AdsImage src={ads1Img} alt="Ads" />}
            title="Scale up for success"
            description="upwork.com"
          />

          <LinkNavigation
            icon={<AdsImage src={ads2Img} alt="Ads" />}
            title="Elite Software engineer Wanted"
            description="developers.turing.com"
          />
        </NavSection>

        <NavSection title="Contacts"> 
          <LinkNavigation
            icon={
              <ProfileIcon src={profilePic2} online />
            }
            title="Jhon Doe"
          />

          <LinkNavigation
            icon={
              <ProfileIcon src={profilePic2} lastSeen="2h" />
            }
            title="Escaravalho Doe"
          />

          <LinkNavigation
            icon={<ProfileIcon src={profilePic2} lastSeen="27m" />}
            title="Frank Sinatra"
          />

          <LinkNavigation
            icon={<ProfileIcon src={profilePic2} lastSeen="1m" />}
            title="Loneli Room"
          />

          <LinkNavigation
            icon={<ProfileIcon src={profilePic2} lastSeen="24m" />}
            title="Josefina Dias"
          />
        </NavSection>

        <NavSection title="Group conversations">
          <LinkNavigation 
            icon={
              <IconWrapper>
                <img 
                  src={plusIcon} 
                  alt="Add groups" 
                  style={{ filter: 'var(--filter-primary-icon)' }}
                />
              </IconWrapper>
            }
            title="Create new group"
          />
        </NavSection>
      </SideNavigation>
    </MainContent>

  </Container>
)

export default App
