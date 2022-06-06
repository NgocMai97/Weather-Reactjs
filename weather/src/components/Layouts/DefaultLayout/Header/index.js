import { Link } from 'react-router-dom'
import avatar from '~/Assets/images/avatar.png'
import styles from './Header.module.scss'
import className from 'classnames/bind';

const cx = className.bind(styles);

function Header() {

  const handleNavClick = (e) => {
    let NavItem = e.target;

    let active = document.querySelector(cx('active'))
    console.log(active);

    if(active) {
      active.classList.remove(cx('active'))
    }
   
    NavItem.classList.add(cx('active'));
  }
  
  return (
    <header className={cx('header-wrap')}>
      <ul className={cx('nav','fs-5','fw-bold','m-0')}>
            <li className={cx('nav-item', 'm-2', 'text-muted', 'active')} onClick={handleNavClick}>
               <Link to="/">Today</Link>
            </li>
            <li className={cx('nav-item', 'm-2', 'text-muted')} onClick={handleNavClick}>
                <Link to="/week">Week</Link>
            </li>
            <li className={cx('nav-item', 'm-2', 'text-muted')} onClick={handleNavClick}>
                <Link to="/hour">Hour</Link>
            </li>
        </ul>
        <div className={cx('header-avatar')}>
            <img src={avatar} alt="" className={cx('rounded-circle')} />
        </div>
    </header>
  )
}


export default Header