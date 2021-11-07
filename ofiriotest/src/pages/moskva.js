import React from 'react';
import withGetCityWeather from '../components/withGetCityWeather';
import WeatherView from '../components/WeatherView/WeatherView';

const Moskva = () => {
    const MoskvaWeather = withGetCityWeather(
        WeatherView,
        "Moskva",
        5
    );

    return (
        <MoskvaWeather />
    );
}

export default Moskva;
