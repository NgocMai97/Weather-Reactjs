import React, { useState, useEffect } from "react";
import cityApi from "../../api/cityApi";
const SearchForm = props => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        const fetProduct = async () => {
            const city = await cityApi.getAll();
            console.log(city);
        }
        fetProduct();
    }, [query]);
    return(
        <div className="search-form">
            <form action="" className='mb-3'>
                <input type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)}
                title="Press city name then Enter" value={query} className='search-bar'/>
            </form>
        </div>
    )
}
export default SearchForm;