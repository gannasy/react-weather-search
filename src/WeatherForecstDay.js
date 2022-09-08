import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecstDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.main.temp_max);
        return `${temperature}°`
    }

    function minTemp() {
        let temperature = Math.round(props.data.main.temp_min);
        return `${temperature}°`
    }

    function dayFormatted() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();


        let days = ["Mn", "Tu", "Wn", "Th", "Fr", "St", "Sn"];
        return days[day];

    }
    return (
        <div className="WeatherForecstDay">
            <div className="WeatherForecast-day">{dayFormatted()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temps">
                <span className="WeatherForecast-temp-max">{maxTemp()}
                </span>
                <span className="WeatherForecast-temp-min">{minTemp()}
                </span>
            </div></div>
    )
}