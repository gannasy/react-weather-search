import React from 'react';

export default function FormattedDate(props) {
    let days = ["Mn", "Tu", "Wn", "Th", "Fr", "St", "Sn"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let mins = props.date.getMinutes();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    return (<div>
        {day} {hours}:{mins}
    </div>)
}