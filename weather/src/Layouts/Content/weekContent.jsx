import React , { useState, useEffect } from 'react'
import weatherStatus from '../../Assets/images/weatherStatus.png';
import weatherApi from '../../api/weatherApi';

const WeekContent = ({weatherData}) => {
  const handleClickItem = (e) => {
    let weekItem = e.target.closest('.week-prediction-item');
    let dataDt = weekItem.getAttribute('data-dt');
    let predictDetails = document.querySelectorAll('.week-prediction-details');
    if (document.querySelector('.week-prediction-item.active') !== null) {
      document.querySelector('.week-prediction-item.active').classList.remove('active');
    }
    weekItem.classList.add('active');
    predictDetails.forEach(function (el) {
      let predictDt = el.getAttribute('data-dt');
      if (predictDt === dataDt) {
        if (document.querySelector('.week-prediction-details.active') !== null) {
          document.querySelector('.week-prediction-details.active').classList.remove('active');
        }
        el.classList.add('active');
      }
    })
    
  }
  return (
    <div className='row week-prediction'>
      <div className="week-prediction-wrap">
        {weatherData.map((data,index) => (
          <div className={"week-prediction-item " + (index == 0 ? 'active' : '')} data-dt={data.dt} key={index} onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>{new Date(data.dt*1000).toDateString()}</p>
              <div className="weather-status text-center">
                <img src={'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'} alt="" />
                <p className='day-temperature'>{Math.round(data.temp.min)}°C - {Math.round(data.temp.max)}°C</p>
              </div>
            </div>
          </div>
        ))}
          
      </div>
      {weatherData.map((data,index) => (
        <div key={index} className={"week-prediction-details bg-white " + (index == 0 ? 'active' : '') } data-dt={data.dt}>
          <p className='fs-5 text-muted text-left'>{new Date(data.dt*1000).toDateString()}</p>
          <div className="row">
            <div className="col-detail text-left">
              <p className='fs-6 text-muted'>Temp current : {Math.round(data.temp.day)}°C</p>
              <p className='fs-6 text-muted'>Temp : {data.temp.min}°C - {data.temp.max} °C</p>
              <p className='fs-6 text-muted'>Humidity : {data.humidity} %</p>
              <p className='fs-6 text-muted'>Wind speed : {data.wind_speed} km/h</p>
            </div>
            <div className="col-detail text-left">
              <p className='fs-6 text-muted'>Sunrise  : {new Date(data.sunrise*1000).toLocaleTimeString()} am</p>
              <p className='fs-6 text-muted'>Sunset : {new Date(data.sunset*1000).toLocaleTimeString()} pm</p>
              <p className='fs-6 text-muted'>Description : {data.weather[0].description}</p>
              <p className='fs-6 text-muted'>Atmospheric pressure : {data.pressure}</p>
            </div>
          </div>
        </div>
        ))}

    </div>
  )
}

export default WeekContent