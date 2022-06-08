import React from 'react'
import { useState } from 'react';
import WeatherLogo from '../../Assets/images/weatherLogo.png';
import weatherRain from '../../Assets/images/weatherRain.png';

import SearchForm from '../Search';
import '../../Assets/Scss/sidebar.scss';
const SideBar = ({currentWeather,handleKeyDown,cityName}) => {

  return (
    <div className='sidebar'>
        <div className="wrap">
        <div className="search-form">
            <form action="" className='mb-3'>
                <input type="text" placeholder='Search'
                onKeyDown={handleKeyDown}
                title="Press city name then Enter" className='search-bar'/>
            </form>
        </div>
            {/* <img src={'https://openweathermap.org/img/w/' + currentWeather.weather[0].icon + '.png'} alt="" width="100px" /> */}
            <div className="fs-2 fw-bold lh-sm text-dack">
                {cityName}
            </div>
            <div className="fs-1 fw-bold">
                {Math.round(currentWeather.temp)}°C
            </div>
            <div className="fs-5 lh-lg">
                {new Date(currentWeather.dt*1000).toDateString()}
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                {/* {currentWeather.weather[0]?.description} */}
                <br />
            </div>
            <div className="weather-image">
                <img src={weatherRain} alt="" />
                <span className='fs-3 fw-bold text-white weather-address'>{cityName}</span>
            </div>
        </div>
    </div>
  )
}


export default SideBar