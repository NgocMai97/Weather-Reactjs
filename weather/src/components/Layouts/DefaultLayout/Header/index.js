import React from 'react'
import avatar from '../../../../Assets/images/avatar.png'
import styles from './Header.module.scss'
import className from 'classnames/bind';

const cx = className.bind(styles);

function Header() {

  const handleNavClick = (e) => {
    let NavItem = e.target;
    if (document.querySelector('.nav-item.active') !== null) {
      document.querySelector('.nav-item.active').classList.remove('active');
    }
    NavItem.classList.add('active');
  }
  
  return (
    <header className={cx('header-wrap')}>
        <ul className={cx('nav fs-5 fw-bold m-0')}>
            <li className={cx('nav-item m-2 text-muted')} onClick={handleNavClick}>Today</li>
            <li className={cx('nav-item m-2 text-muted')} onClick={handleNavClick}>Week</li>
            <li className={cx('nav-item m-2 text-muted')} onClick={handleNavClick}>Hour</li>
        </ul>
        <div className={cx('header-avatar')}>
            <img src={avatar} alt="" className={cx('rounded-circle')} />
        </div>
    </header>
  )
}


export default Header