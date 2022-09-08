import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.city}</h1>
            <ul>
                <li><FormattedDate date={props.info.date} /></li>
                <li className="text-capitalize">{props.info.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <WeatherIcon code={props.info.icon} size={52} />

                    <WeatherTemperature celsius={props.info.temperature} />


                </div>


                <div className="col-6">
                    <ul>

                        <li>
                            Humidity: {props.info.humidity}%
                        </li>
                        <li>
                            Wind: {props.info.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}