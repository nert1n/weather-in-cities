import React from 'react'

export default function Cities(props) {
    const weatherCity = [
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

    const handleCityChange = (e) => {
        props.updateCity(e.target.value);
    };
    return (
        <select
            className='main__select'
            name="selectCity"
            defaultValue="Kiev"
            onChange={handleCityChange}
        >
        {weatherCity.map((el, index) => (
            <optgroup label={el.country} key={index}>
            {el.city.map((city, cityIndex) => (
                <option value={el.cityEng[cityIndex]} key={cityIndex}>
                {city}
                </option>
            ))}
            </optgroup>
        ))}
        </select>
    )
}
