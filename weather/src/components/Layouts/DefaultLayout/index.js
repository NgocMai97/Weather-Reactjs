import { createContext, useEffect, useState } from "react";
import weatherApi from '~/api/weatherApi';
import cityApi from '~/api/cityApi';
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)
export const ThemContext = createContext()

function Defaultlayout({ children }) {
  const [ weatherData, setWeatherData ] = useState([]);
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
      const fetchData = async () => {
        try {
          const getData = await weatherApi.get(lat,lon)
          .then(
            (response) => {
              console.log('abc:',response)
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
      <ThemContext.Provider value={weatherData}>
        <div className={cx('container')}>
            <Sidebar currentWeather = {currentWeather} handleKeyDown={handleKeyDown} cityName={cityName} />
            <div className={cx('main')}>
                <Header/>
                <div className={cx('content')}>{ children }</div>
            </div>
        </div>
      </ThemContext.Provider>
    )
}

export default Defaultlayout;