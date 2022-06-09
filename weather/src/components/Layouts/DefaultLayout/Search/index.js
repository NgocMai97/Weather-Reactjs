import React, { useState, useEffect } from "react";
import cityApi from "~/api/cityApi";
import styles from './Search.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

const Search = ({handleKeyDown}) => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        const fetProduct = async () => {
            const city = await cityApi.getAll();
            console.log(city);
        }
        fetProduct();
    }, [query]);
    return(
        <div className={cx('search-form')}>
            <form action="" className='mb-3'>
                <input className={cx('search-bar')} onKeyDown={handleKeyDown} type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)}
                title="Press city name then Enter" value={query}/>
            </form>
        </div>
    )
}
export default Search;