/** @format */

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeather(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function realTemperature() {
    let temperature = Math.round(props.data.feels_like.day);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tueday",
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
    return (
      <span>
        {days[day]}
        <br /> {monthNames[date.getMonth()]} {date.getDate()}
      </span>
    );
  }

  return (
    <div className="col-12 col-md-2 nextDate weather DailyWeather">
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      max{" "}
      <span className="temperature">
        {maxTemperature()}
        {props.unit}
      </span>
      <br />
      min{" "}
      <span className="temperature">
        {minTemperature()}
        {props.unit}
      </span>
      <br />
      <div className="realFeel">
        RealFeel
        <br />
        <span className="temperature">
          {realTemperature()}
          {props.unit}
        </span>
      </div>
    </div>
  );
}
