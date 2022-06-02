import React from 'react'
import avatar from '../../Assets/images/avatar.png';
import '../../Assets/Scss/header.scss';
const Header = props => {
  const handleNavClick = (e) => {
    let NavItem = e.target;
    if (document.querySelector('.nav-item.active') !== null) {
      document.querySelector('.nav-item.active').classList.remove('active');
    }
    NavItem.classList.add('active');
  }
  return (
    <div className='header-wrap'>
        <ul className='nav fs-5 fw-bold m-0'>
            <li className='nav-item m-2 text-muted' onClick={handleNavClick}>Today</li>
            <li className='nav-item m-2 text-muted' onClick={handleNavClick}>Week</li>
            <li className='nav-item m-2 text-muted' onClick={handleNavClick}>Hour</li>
        </ul>
        <div className="header-avatar m-0">
            <img src={avatar} alt="" className='rounded-circle' />
        </div>
    </div>
  )
}


export default Header