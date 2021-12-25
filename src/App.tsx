import LinkList from './components/LinkList/LinkList'
import LinkNavigation from './components/LinkNavigation/LinkNavigation'
import Header from './components/Header/Header'
import FriendsImg from './assets/friends-colored.png'
import GroupsImg from './assets/groups-colored.png'
import MarketplaceImg from './assets/marketplace-colored.png'
import WatchImg from './assets/watch-colored.png'
import MemoriesImg from './assets/memories-colored.png'
import { ReactComponent as ChevronIcon } from './assets/chevron-icon.svg'

import { LeftNavigation } from './App.styles'

const App = () => {
  return <div className="App">
    <Header />

    <div>
      <LeftNavigation>
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
      </LeftNavigation>
    </div>
  </div>
}

export default App
