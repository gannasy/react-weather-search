import React, { useState } from 'react';
import './Weather.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from './WeatherForecast';


export default function Weather(props) {

    const [city, setCity] = useState(props.city);

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
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            coords: response.data.coord
        });

    }
    function handleSubmit(event) {
        event.preventDefault();
        searchForCity();
    }

    function searchForCity() {
        const apiKey = "ef83a86d6c6e19e2b4352f1ab9249fd9";
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(api).then(handleResponse);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"
                                onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" /></div>
                    </div>
                </form>
                <WeatherInfo city={city} info={weatherData} />
                <WeatherForecast coords={weatherData.coords} />
            </div>)
    } else {

        searchForCity();
        return "Loading...";
    }
}