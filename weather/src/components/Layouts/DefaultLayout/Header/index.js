import { Link } from 'react-router-dom'
import avatar from '~/Assets/images/avatar.png'
import styles from './Header.module.scss'
import className from 'classnames/bind';
import { useState } from 'react';

const cx = className.bind(styles);

function Header() {
  const pageRoute = [{ path: '/', tab: 'Today'}, { path: '/week', tab: 'Week'}, { path: '/hour', tab: 'Hour'}]
  const handleNavClick = (e) => {

    let NavItem = e.target;

    let active = document.querySelector('.active')
    if(active) {
      active.classList.remove('active')
    }
   
    NavItem.classList.add('active');
  }
  
  return (
    <header className={cx('header-wrap')}>
      <ul className={cx('nav','fs-5','fw-bold','m-0')}>
        {
          pageRoute.map((item) => {
            return (
              <li className={cx('nav-item', 'm-2', 'text-muted')} onClick={handleNavClick}>
               <Link to={item.path}>{item.tab}</Link>
            </li>
            )
          })
        }
      </ul>
        <div className={cx('header-avatar')}>
            <img src={avatar} alt="" className={cx('rounded-circle')} />
        </div>
    </header>
  )
}


export default Header