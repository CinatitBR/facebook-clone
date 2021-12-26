import classNames from 'classnames'
import LinkList from '../LinkList/LinkList'
import LinkItem from '../LinkItem/LinkItem'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg'
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as FriendsIcon } from '../../assets/friends-icon.svg'
import { ReactComponent as WatchIcon } from '../../assets/watch-icon.svg'
import { ReactComponent as MarketplaceIcon } from '../../assets/marketplace-icon.svg'
import { ReactComponent as GamingIcon } from '../../assets/gaming-icon.svg'
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg'
import { ReactComponent as MessengerIcon } from '../../assets/messenger-icon.svg'
import { ReactComponent as NotificationIcon } from '../../assets/notification-icon.svg'
import { ReactComponent as SortDownIcon } from '../../assets/sort-down-icon.svg'

import style from './Header.module.css'

const Header = () => <header className={style.container}>
  <div className={style.leftWrapper}>
    <FacebookIcon className={style.brandIcon} />

    <label className={style.searchBar}>
      <SearchIcon />

      <input type="text" placeholder="Search Facebook" />
    </label>
  </div>

  <div className={style.centerWrapper}>

    <LinkList className={style.linkList}>
      <LinkItem className={classNames(style.link, style.selected)}>
        <HomeIcon />
      </LinkItem>

      <LinkItem className={style.link}>
        <FriendsIcon />
      </LinkItem>

      <LinkItem className={style.link}>
        <WatchIcon />
      </LinkItem>

      <LinkItem className={style.link}>
        <MarketplaceIcon />
      </LinkItem>

      <LinkItem className={style.link}>
        <GamingIcon />
      </LinkItem>
    </LinkList>

  </div>

  <div className={style.rightWrapper}>
    <LinkList className={style.linkList}>
      <LinkItem className={style.accountWrapper}>
        <div className={style.profilePic}></div> Jacinto
      </LinkItem>

      <LinkItem className={style.iconWrapper}>
        <MenuIcon className={style.icon} />
      </LinkItem>

      <LinkItem className={style.iconWrapper}>
        <MessengerIcon className={style.icon} />
      </LinkItem>

      <LinkItem className={style.iconWrapper}>
        <NotificationIcon className={style.icon} />
      </LinkItem>

      <LinkItem className={style.iconWrapper}>
        <SortDownIcon className={style.icon} />
      </LinkItem>
    </LinkList>
  </div>
</header>

export default Header