import React from 'react'
import WeatherLogo from '../../Assets/images/weatherLogo.png';
import weatherRain from '../../Assets/images/weatherRain.png';
import '../../Assets/Scss/sidebar.scss';
const SideBar = props => {
  return (
    <div className='sidebar'>
        <div className="wrap">
            <form action="" className='mb-3'>
                <input type="text" placeholder='Search' title="Press city name then Enter" value='' className='search-bar'/>
            </form>
            <img src={WeatherLogo} alt="" />
            <div className="fs-2 fw-bold lh-sm text-dack">
                Ha Noi
            </div>
            <div className="fs-1 fw-bold">
                28 C
            </div>
            <div className="fs-5 lh-lg">
                Wednesday, 10:20 pm
            </div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                broken clouds
                <br />
                Clouds 72
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