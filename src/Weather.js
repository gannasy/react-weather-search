import React, { useState } from 'react';
import './Weather.css';
import axios from "axios";


export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            date: "Wen 07:00"
        });

    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" /></div>
                    </div>
                </form>
                <h1>New York</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">

                        <img src={weatherData.icon} alt="Cloudy" />

                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">℃</span>

                    </div>

                    <div className="col-6">
                        <ul>

                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>)
    } else {
        let city = "Kyiv";
        const apiKey = "ef83a86d6c6e19e2b4352f1ab9249fd9";
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

        axios.get(api).then(handleResponse);

        return "Loading...";
    }
}