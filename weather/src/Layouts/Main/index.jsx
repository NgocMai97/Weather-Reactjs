import React from 'react';
import SideBar from '../SideBar';
import '../../Assets/Scss/main.scss';
import Header from '../Header';
import WeekContent from '../Content/weekContent';
const MainLayout = props => {
    return (
        <div className="container">
            <div className="row">
                <SideBar/>
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
