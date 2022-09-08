import React, { useState, useEffect } from 'react';
import WeatherForecstDay from './WeatherForecstDay';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        //set loaded to false if coords change we want to
        setLoaded(false);
    }, [props.coords])


    function handleResponse(response) {
        setForecast(response.data.list);
        console.log(response.data.list);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map((daily, index) => {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecstDay data={daily} />
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })}

                </div>
            </div>
        )
    }
    else {
        let apiKey = 'ef83a86d6c6e19e2b4352f1ab9249fd9';
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
