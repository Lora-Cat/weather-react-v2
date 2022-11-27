/** @format */

import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  let content = "";
  switch (props.code) {
    case "01d":
    case "01n":
      content = (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "02d":
    case "02n":
      content = (
        <div className="icon sun-cloudy">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "03d":
    case "03n":
      content = (
        <div className="icon cloudy">
          <div className="cloud"></div>
        </div>
      );
      break;
    case "04d":
    case "04n":
      content = (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case "09d":
    case "09n":
      content = (
        <div className="icon cloudy rainy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case "10d":
    case "10n":
      content = (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case "11d":
    case "11n":
      content = (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
      break;
    case "13d":
    case "13n":
      content = (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case "50d":
    case "50n":
      content = (
        <div className="icon cloudy">
          <div className="cloud"></div>
        </div>
      );
      break;
    default:
      content = (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
  }
  return <div className="WeatherIcon">{content}</div>;
}
