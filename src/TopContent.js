/** @format */

import React, { useState } from "react";
import axios from "axios";

export default function TopContent(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayOfWeek = days[props.weatherData.data.getDay()];
  let month = monthNames[props.weatherData.data.getMonth()];
  let data = props.weatherData.data.getDate();
  let hours = props.weatherData.data.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = props.weatherData.data.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let [country, setCountry] = useState("");

  function updateStateName(response) {
    setCountry(response.data[0].name.official);
  }
  let urlState = `https://restcountries.com/v3.1/alpha/${props.weatherData.countryName}`;
  axios.get(urlState).then(updateStateName);

  return (
    <div className="row weather">
      <div className="col-12 col-md-6">
        <div className="cityName">{props.weatherData.cityName}</div>
        <div className="stateName">{country}</div>
      </div>
      <div className="col-6 col-md-3">
        <div className="time">
          {hours}
          <span id="blink">:</span>
          {minutes}
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="currentDate">
          {dayOfWeek}
          <br />
          {month} {data}
        </div>
      </div>
    </div>
  );
}
