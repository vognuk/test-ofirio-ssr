import * as React from "react"
import Layout from '../components/Layout';
import withGetCityWeather from '../components/withGetCityWeather';
import WeatherView from '../components/WeatherView/WeatherView';

const IndexPage = () => {
  const MinskWeather = withGetCityWeather(
    WeatherView,
    "Minsk main page",
    3
  );

  return (
    <>
      <MinskWeather />
    </>
  )
}

export default IndexPage;
