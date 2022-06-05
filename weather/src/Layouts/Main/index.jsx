import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar';
import '../../Assets/Scss/main.scss';
import Header from '../Header';
import WeekContent from '../Content/weekContent';
import weatherApi from '../../api/weatherApi';
const MainLayout = props => {
  const [weatherData,setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
    useEffect(() => {
        const fetchData = async () => {
          try {
            const getData = await weatherApi.getAll()
            .then(
              (response) => {
                setWeatherData(response.daily);
                setCurrentWeather(response.current);
                console.log(response.current)
              }
            )
          } catch (error) {
            console.error(error)
          }
        };
       
      fetchData();
     
      }, []);
    return (
        <div className="container">
            <div className="row">
                <SideBar currentWeather = {currentWeather}/>
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
