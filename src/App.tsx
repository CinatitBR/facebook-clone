import LinkList from './components/LinkList/LinkList'
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


import { LeftNavigation } from './App.styles'

const App = () => {
  return <div className="App">
    <Header />

    <LeftNavigation>
      <NavSection divider>
        <LinkList column={true}>
          <LinkNavigation 
            icon={
              <span className="profilePic">
              </span>
            }
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
              <span className="iconWrapper">
                <ChevronIcon />
              </span>
            }
            title="See more"
          />
        </LinkList>
      </NavSection>

      <NavSection title="Your Shortcuts">
        <LinkList column>
          <LinkNavigation
            icon={<img className="groupIcon" src={group1Img} alt="Group" />}
            title="Minecraft"
          /> 

          <LinkNavigation
            icon={<img className="groupIcon" src={group2Img} alt="Group" />}
            title="Agar.io"
          />

          <LinkNavigation
            icon={<img className="groupIcon" src={group3Img} alt="Group" />}
            title="Candy Crush"
          />

          <LinkNavigation
            icon={<img className="groupIcon" src={group4Img} alt="Group" />}
            title="Dragon City"
          /> 

          <LinkNavigation
            icon={<img className="groupIcon" src={group5Img} alt="Group" />}
            title="N.W.A"
          />  
        </LinkList>
      </NavSection>
    </LeftNavigation>
  </div>
}

export default App
