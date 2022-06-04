import React from 'react'
import WeatherLogo from '../../Assets/images/weatherLogo.png';
import weatherRain from '../../Assets/images/weatherRain.png';

import SearchForm from '../Search';
import '../../Assets/Scss/sidebar.scss';
const SideBar = props => {
   
  return (
    <div className='sidebar'>
        <div className="wrap">
            <SearchForm />
            <img src={WeatherLogo} alt="" />
            <div className="fs-2 fw-bold lh-sm text-dack">
                {props.timezone}
            </div>
            <div className="fs-1 fw-bold">
                {props.temp} C
            </div>
            <div className="fs-5 lh-lg">
                {props.date}
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                {props.description}
                <br />
                {props.desMain}
            </div>
            <div className="weather-image">
                <img src={weatherRain} alt="" />
                <span className='fs-3 fw-bold text-white weather-address'>Ha Noi</span>
            </div>
        </div>
    </div>
  )
}


export default SideBar