import React, { useState } from 'react';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius');

    function convertFerengeit(event) {
        event.preventDefault();
        setUnit("ferengeit");
    }

    function convertCelsiuis(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function farengeit() {
        return (props.celsius * 9 / 5) + 32;
    }

    if (unit === 'celsius') {

        return (
            <div className="WeatherInfo">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">℃|<a href="/" onClick={convertFerengeit}>℉</a></span>
            </div>
        )
    } else {

        return (
            <div className="WeatherInfo">
                <span className="temperature">{Math.round(farengeit())}</span>
                <span className="unit"><a href="/" onClick={convertCelsiuis}>℃</a>|℉</span>
            </div>)
    }


}

