
import React from 'react'
import WeatherLogo from '../../../../Assets/images/weatherLogo.png';
import weatherRain from '../../../../Assets/images/weatherRain.png';

// import WeatherLogo from '~/Assets/images/WeatherLogo.png'
// import weatherRain from '~/Assets/images/WeatherRain.png'

import Search from '../Search'  
import styles from './Sidebar.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

function Sidebar(props) {
   
  return (
    <aside className={cx('sidebar')}>
        <div className={cx('wrap')}>
            <Search/>
            <img className={cx('weather')} src={WeatherLogo} alt="weather image" />

            <div className="fs-2 fw-bold lh-sm text-dack text-blur text-medium">
                Ha Noi
            </div>
            <div className="fs-1 fw-bold text-blur text-big">
               23 °C
            </div>
            <div className="fs-5 lh-lg text-blur">
                Monday, 11:45 pm
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                Overcast Clouds
                <br />
                Clouds 100%
            </div>
            <div className={cx('weather-image')}>
                <img src={weatherRain} alt="" />
                <span className='fs-3 fw-bold text-white weather-address'>Ha Noi</span>
            </div>
        </div>
    </aside>
  )
}


export default Sidebar