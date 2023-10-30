import React, { useRef, useState } from 'react'
import cl from './WeatherList.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { syncState } from '../../redux/slices/citySlice';

export default function WeatherList(props) {
    const city = useSelector((state) => state.city.value);
    const dispatch = useDispatch()
    const weatherList = [
        {
            country: 'Украина',
            city: ['Киев', 'Черкассы', 'Днепр'],
        },
    ];
    
    const nodeRef = useRef(null);

    const handleCityChange = (e) => {
        dispatch(syncState(e.target.value))
    };

    return (
        <div className={cl.list}>
            <input
                className={cl.list__input}
                type="text"
                name="first_name"
                ref={nodeRef}
                value={props.city}
                onChange={handleCityChange}
            />
            <select
                className={cl.list__select}
                name="selectCity"
                defaultValue={city}
                onChange={handleCityChange}
            >
                {weatherList.map((el, index) => (
                    <optgroup label={el.country} key={index}>
                    {el.city.map((city, cityIndex) => (
                        <option value={el.city[cityIndex]} key={cityIndex}>
                            {city}
                        </option>
                    ))}
                    </optgroup>
                ))}
            </select>
        </div>
    )
}
