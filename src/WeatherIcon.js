/** @format */

import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  let content = "";
  switch (props.code) {
    case "01d":
    case "01n":
      content = (
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      );
      break;
    case "02d":
    case "02n":
      content = (
        <div class="icon sun-cloudy">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      );
      break;
    case "03d":
    case "03n":
      content = (
        <div class="icon cloudy">
          <div class="cloud"></div>
        </div>
      );
      break;
    case "04d":
    case "04n":
      content = (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      );
      break;
    case "09d":
    case "09n":
      content = (
        <div class="icon cloudy rainy">
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      );
      break;
    case "10d":
    case "10n":
      content = (
        <div class="icon rainy">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      );
      break;
    case "11d":
    case "11n":
      content = (
        <div class="icon thunder-storm">
          <div class="cloud"></div>
          <div class="lightning">
            <div class="bolt"></div>
            <div class="bolt"></div>
          </div>
        </div>
      );
      break;
    case "13d":
    case "13n":
      content = (
        <div class="icon flurries">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
      );
      break;
    case "50d":
    case "50n":
      content = (
        <div class="icon cloudy">
          <div class="cloud"></div>
        </div>
      );
      break;
    default:
      content = (
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      );
  }
  return <div className="WeatherIcon">{content}</div>;
}
