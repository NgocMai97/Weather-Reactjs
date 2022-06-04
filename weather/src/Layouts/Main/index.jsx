import React, { useState } from 'react';
import SideBar from '../SideBar';
import '../../Assets/Scss/main.scss';
import Header from '../Header';
import WeekContent from '../Content/weekContent';
import weatherApi from '../../api/weatherApi';
import { useEffect } from 'react';
const MainLayout = props => {
    useEffect(() => {
        const fetProduct = async () => {
            const weather = await weatherApi.getAll();
            console.log(weather);
            setTimeZone(weather.timezone);
            setTemp(Math.round(weather.current.temp));

            const current = new Date();
            const date = `${current.getDay()}, ${current.getHours()}:${current.getMinutes()}`;
            setDate(date);

            setDescription(weather.current.weather[0].description);
            setDesMain(weather.current.weather[0].main);
        }
        fetProduct();
    }, []);
    const [timezone, setTimeZone] = useState('');
    const [temp, setTemp] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [desMain, setDesMain] = useState('');
    return (
        <div className="container">
            <div className="row">
                <SideBar 
                    timezone={timezone} 
                    temp={temp} 
                    date={date} 
                    description={description}
                    desMain={desMain}
                />
                <div className="main-content">
                    <div className="wrap">
                    <Header/>
                    <WeekContent/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
