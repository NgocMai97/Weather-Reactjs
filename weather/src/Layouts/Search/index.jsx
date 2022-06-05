import React, { useState, useEffect } from "react";
import cityApi from "../../api/cityApi";
import weatherApi from "../../api/weatherApi";
function SearchForm( props) {
    const [query, setQuery] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    useEffect(() => {
        console.log('effect cicy')
        const fetProduct = async () => {
            const city = await cityApi.get(query);
            setLat(city.coord.lat);
            setLon(city.coord.lon);
        }
        fetProduct();
    }, [query]);
    useEffect(() => {
        console.log('effect weather');
        const fetProduct = async () => {
            const weather = await weatherApi.get(lat, lon);
            console.log(weather);
        }
        fetProduct();
    }, [lat, lon]);
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            console.log(e.target.value);
            handleSearch()
            setQuery(e.target.value)
        }
    }
    const handleSearch = (e) => {
        console.log(1)
    }
    return(
        <div className="search-form">
            <form action="" className='mb-3'>
                <input type="text" placeholder='Search'
                onKeyDown={handleKeyDown}
                title="Press city name then Enter" className='search-bar'/>
            </form>
        </div>
    )
}
export default SearchForm;