import React , { useState } from 'react'
import weatherStatus from '../../Assets/images/weatherStatus.png'

const WeekContent = props => {
  const handleClickItem = (e) => {
    let weekItem = e.target.closest('.week-prediction-item');
    if (document.querySelector('.week-prediction-item.active') !== null) {
      document.querySelector('.week-prediction-item.active').classList.remove('active');
    }
    weekItem.classList.add('active');
  }
  return (
    <div className='row week-prediction'>
      <div className="week-prediction-wrap">
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature fs-6 text-muted fw-bold'>25° - 33°</p>
              </div>
          </div>
        </div>
        <div className="week-prediction-item " onClick={handleClickItem}>
            <div className='week-prediction-content bg-white'>
              <p className='day'>Wed, 25/05</p>
              <div className="weather-status text-center">
                <img src={weatherStatus} alt="" />
                <p className='day-temperature'>25° - 33°</p>
              </div>
          </div>
        </div>
      </div>
    <div className="week-prediction-details bg-white">
      <p className='fs-5 text-muted text-left'>Mon, 30/05</p>
      <div className="row">
        <div className="col-detail text-left">
          <p className='fs-6 text-muted'>Temp current : 32 °C</p>
          <p className='fs-6 text-muted'>Temp : 25 °C - 33.34 - °C</p>
          <p className='fs-6 text-muted'>Humidity : 69 %</p>
          <p className='fs-6 text-muted'>Wind speed : 3.76 km/h</p>
        </div>
        <div className="col-detail text-left">
          <p className='Sunrise : 5:15 am'>Temp current : 32 °C</p>
          <p className='Sunset : 6:32 pm'>Temp : 25 °C - 33.34 - °C</p>
          <p className='Description : moderate rain'>Humidity : 69 %</p>
          <p className='Atmospheric pressure : 1000 hPa'>Wind speed : 3.76 km/h</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default WeekContent