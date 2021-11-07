import React from "react";

const WeatherView = ({data, cityName, days, props}) => {
    return (
        <section>
            <h2>WeatherView of {cityName} for {days} days</h2>
        </section>
    )
}

export default WeatherView;
