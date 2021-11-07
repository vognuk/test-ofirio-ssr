import React from 'react';
import withGetCityWeather from '../components/withGetCityWeather';
import WeatherView from '../components/WeatherView/WeatherView';

const Minsk = () => {
    const MinskWeather = withGetCityWeather(
        WeatherView,
        "Minsk",
        5
    );

    return (
        <MinskWeather />
    );
}

export default Minsk;
