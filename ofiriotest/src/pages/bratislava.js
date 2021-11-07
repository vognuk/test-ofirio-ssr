import React from 'react';
import withGetCityWeather from '../components/withGetCityWeather';
import WeatherView from '../components/WeatherView/WeatherView';

const Bratislava = () => {
    const BratislavaWeather = withGetCityWeather(
        WeatherView,
        "Bratislava",
        5
    );

    return (
        <BratislavaWeather />
    );
}

export default Bratislava;
