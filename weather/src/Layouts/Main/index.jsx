import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar';
import '../../Assets/Scss/main.scss';
import Header from '../Header';
import WeekContent from '../Content/weekContent';
import weatherApi from '../../api/weatherApi';
import cityApi from '../../api/cityApi';
const MainLayout = props => {
  const [weatherData,setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [lat, setLat] = useState('21.030653');
  const [lon, setLon] = useState('105.847130');
  const [cityName, setCityName] = useState('ha noi');
  const [query, setQuery] = useState('');
  const handleKeyDown = (e) => {
      if(e.key === 'Enter') {
          e.preventDefault();
          console.log(e.target.value);
          setQuery(e.target.value)
      }
  }
  useEffect(() => {
      console.log('effect cicy')
      const fetchCity = async () => {
        try {
          const city = await cityApi.get(query)
          .then(
            (response) => {
              setLat(response.coord.lat);
              setLon(response.coord.lon);
              setCityName(response.name);
              console.log(response)
            }
          )
        } catch (error) {
          console.error(error)
        }
      }
      fetchCity();
  }, [query]);
  
  useEffect(() => {
      console.log('effect weather');
      const fetchData = async () => {
        try {
          const getData = await weatherApi.get(lat,lon)
          .then(
            (response) => {
              setWeatherData(response.daily);
              setCurrentWeather(response.current);
            }
          )
        } catch (error) {
          console.error(error)
        }
      };
      
    fetchData();
  }, [lat, lon]);
    return (
        <div className="container">
            <div className="row">
                <SideBar currentWeather = {currentWeather} handleKeyDown={handleKeyDown} cityName={cityName}/>
                <div className="main-content">
                    <div className="wrap">
                    <Header/>
                    <WeekContent weatherData= {weatherData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
