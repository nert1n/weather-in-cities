import React, { useRef, useState } from 'react'
import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';
import { CSSTransition } from 'react-transition-group';
import cl from './WeatherList.module.scss'

export default function WeatherList(props) {
    const weatherList = [
        {
            country: 'Украина',
            city: ['Киев', 'Черкассы', 'Донетск'],
            cityEng: ['Kiev', 'Cherkasy', 'Donetsk'],
        },
        {
            country: 'Россия',
            city: ['Москва'],
            cityEng: ['Moscow'],
        },
        {
            country: 'Америка',
            city: ['Нью Йорк', 'Лос Анджелес'],
            cityEng: ['New York', 'Los Angeles'],
        },
    ];

    const [isOn, setIsOn] = useState(false);
    const nodeRef = useRef(null);

    const updateIsOn = (newIsOn) => {
        setIsOn(newIsOn);
    };

    const handleCityChange = (e) => {
        props.updateCity(e.target.value);
    };

    return (
        <div className={cl.list}>
            <div className={cl.list__change}>
                <select
                    className={cl.list__select}
                    name="selectCity"
                    defaultValue="Kiev"
                    onChange={handleCityChange}
                >
                    {weatherList.map((el, index) => (
                        <optgroup label={el.country} key={index}>
                        {el.city.map((city, cityIndex) => (
                            <option value={el.cityEng[cityIndex]} key={cityIndex}>
                                {city}
                            </option>
                        ))}
                        </optgroup>
                    ))}
                </select>
                <ToggleSwitch updateIsOn={updateIsOn}/>
            </div>
            <CSSTransition
                in={isOn}
                timeout={300}
                classNames='list__input'
                nodeRef={nodeRef}
                unmountOnExit
            >
                <input
                    className={`list__input ${isOn ? 'none' : ''}`}
                    type="text"
                    name="first_name"
                    ref={nodeRef}
                    value={props.city}
                    onChange={handleCityChange}
                />
            </CSSTransition>
        </div>
    )
}
