/** @format */

import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeather(props) {
  let [temperature, setTemperature] = useState({
    min: Math.round(props.data.temp.min),
    max: Math.round(props.data.temp.max),
    real: Math.round(props.data.feels_like.day),
  });

  useEffect(() => {
    if (props.unit === "°C") {
      setTemperature({
        min: Math.round(props.data.temp.min),
        max: Math.round(props.data.temp.max),
        real: Math.round(props.data.feels_like.day),
      });
    } else {
      setTemperature({
        min: Math.round((props.data.temp.min * 9) / 5 + 32),
        max: Math.round((props.data.temp.max * 9) / 5 + 32),
        real: Math.round((props.data.feels_like.day * 9) / 5 + 32),
      });
    }
  }, [props]);

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
        {temperature.max}
        {props.unit}
      </span>
      <br />
      min{" "}
      <span className="temperature">
        {temperature.min}
        {props.unit}
      </span>
      <br />
      <div className="realFeel">
        RealFeel
        <br />
        <span className="temperature">
          {temperature.real}
          {props.unit}
        </span>
      </div>
    </div>
  );
}
