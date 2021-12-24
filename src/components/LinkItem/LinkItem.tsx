import classNames from 'classnames'

import style from './LinkItem.module.css'

const LinkItem = (
  { children, className } : 
  { children: React.ReactNode, className?: string }) => (
  <a href="#" className={classNames(style.container, className)}>
    {children}
  </a>
)

export default LinkItem