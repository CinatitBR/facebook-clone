import style from './LinkList.module.css'

interface Props {
  children: React.ReactNode
}

const LinkList = ({ children } : Props) => <div className={style.container}>
  {children}
</div>

export default LinkList