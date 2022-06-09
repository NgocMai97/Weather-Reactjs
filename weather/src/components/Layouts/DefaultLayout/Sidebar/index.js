
import React from 'react'
import WeatherLogo from '../../../../Assets/images/weatherLogo.png';
import weatherRain from '../../../../Assets/images/weatherRain.png';

import Search from '../Search'  
import styles from './Sidebar.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

function Sidebar({ currentWeather,handleKeyDown, cityName }) {
   
  return (
    <aside className={cx('sidebar')}>
        <div className={cx('wrap')}>
            <Search handleKeyDown={handleKeyDown} />
            <img className={cx('weather')} src={WeatherLogo} alt="weather image" />

            <div className="fs-2 fw-bold lh-sm text-dack text-blur text-medium">
                {cityName}
            </div>
            <div className="fs-1 fw-bold text-blur text-big">
               {Math.round(currentWeather.temp)}°C
            </div>
            <div className="fs-5 lh-lg text-blur">
               {new Date(currentWeather.dt*1000).toDateString()}
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                Overcast Clouds
                <br />
                Clouds 100%
            </div>
            <div className={cx('weather-image')}>
                <img src={weatherRain} alt="" />
                <span className={cx('fs-3', 'fw-bold', 'text-white', 'weather-address')}>{cityName}</span>
            </div>
        </div>
    </aside>
  )
}


export default Sidebar