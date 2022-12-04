/** @format */

import React, { useState } from "react";
import axios from "axios";
import TopContent from "./TopContent";
import WeatherIcon from "./WeatherIcon";
import DailyWeather from "./DailyWeather";

import "./styles.css";
import "./Content.css";

export default function Content(props) {
  //let apiKey = "91e4be9d3f0ce62462b88df7804804ae";
  let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let apiAstronomy = "b99861f9264143c2bd4a20afe37f2ab0";
  let [city, setCity] = useState(props.defaultCity);
  let [astronomy, setAstronomy] = useState({});
  let [unit, setUnit] = useState("celsius");
  let [temperature, setTemperature] = useState({ number: "0", unit: "°C" });
  function updateCity(e) {
    setCity(e.target.value);
  }
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [forecastData, setForecastData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      cityName: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      data: new Date(response.data.dt * 1000),
      countryName: response.data.sys.country,
      icon: response.data.weather[0].icon,
    });
    setTemperature({
      number: Math.round(response.data.main.temp),
      unit: "°C",
    });
    let urlAstronomy = `https://api.ipgeolocation.io/astronomy?apiKey=${apiAstronomy}&lat=${response.data.coord.lat}&long=${response.data.coord.lon}`;
    axios.get(urlAstronomy).then(updateAstronomy);
    let urlDailyForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&appid=${apiKey}`;
    axios.get(urlDailyForecast).then(updateForecast);
  }
  function updateForecast(response) {
    setForecastData({
      ready: true,
      daily: response.data.daily,
    });
  }

  function updateAstronomy(response) {
    setAstronomy({
      sunrise: response.data.sunrise,
      sunset: response.data.sunset,
      moonrise: response.data.moonrise,
      moonset: response.data.moonset,
    });
  }

  function search() {
    let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(urlCity).then(showTemperature);
  }

  function updateSearch(e) {
    e.preventDefault();
    search();
  }
  function toFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
    setTemperature({
      number: Math.round((weatherData.temperature * 9) / 5 + 32),
      unit: "°F",
    });
  }
  function toCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
    setTemperature({
      number: weatherData.temperature,
      unit: "°C",
    });
  }

  function convertTemperature() {
    if (unit === "celsius") {
      return (
        <div className="btn-group mx-auto mt-1">
          <button className="btn btn-success" disabled id="celsius">
            °C
          </button>
          <button
            className="btn btn-success"
            id="fahrenheit"
            onClick={toFahrenheit}
          >
            °F
          </button>
        </div>
      );
    } else {
      return (
        <div className="btn-group mx-auto mt-1">
          <button className="btn btn-success" id="celsius" onClick={toCelsius}>
            °C
          </button>
          <button className="btn btn-success" disabled id="fahrenheit">
            °F
          </button>
        </div>
      );
    }
  }
  let container = (
    <div className="row SearchModule">
      <div className="col-12 col-md-8">
        <form
          role="search"
          className="full-width"
          id="search"
          onSubmit={updateSearch}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a location"
              id="search-location"
              onChange={updateCity}
            />
            <span className="input-group-btn">
              <input type="submit" className="btn btn-success" value="Search" />
            </span>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-4">
        <button className="btn btn-primary full-width" id="currentLocation">
          Current location
        </button>
      </div>
    </div>
  );

  if (weatherData.ready && forecastData.ready) {
    return (
      <div className="Content">
        {container}
        <TopContent weatherData={weatherData} />
        <div className="row Forecast">
          <div className="col-12 col-md-2 currentWeather weather">
            <div>
              <div id="iconCurrentWeather">
                <WeatherIcon code={weatherData.icon} />
              </div>
              <span className="temperature current" id="currentTemperature">
                {temperature.number}
                {temperature.unit}
              </span>
            </div>
            {weatherData.description}
            <br />
            Wind: <span id="currentWindSpeed">{weatherData.wind}</span> m/s
            <br />
            Humidity: <span id="currentHumidity">{weatherData.humidity}</span>
            %
            <br />
            {convertTemperature()}
          </div>
          {forecastData.daily.map((daily, index) => {
            if (index > 0 && index < 6) {
              return (
                <DailyWeather
                  data={daily}
                  unit={temperature.unit}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row weather">
          <div className="col-12 col-md-3 info">
            Sunrise:{" "}
            <span>
              <span id="sunrise">{astronomy.sunrise}</span>
            </span>
            <br />
            Sunset:{" "}
            <span>
              <span id="sunset">{astronomy.sunset}</span>
            </span>
          </div>
          <div className="col-12 col-md-3 info">
            Moonrise:{" "}
            <span>
              <span id="moonrise">{astronomy.moonrise}</span>
            </span>
            <br />
            Moonset:{" "}
            <span>
              <span id="moonset">{astronomy.moonset}</span>
            </span>
          </div>
          <div className="col-12 col-md-6 info">
            <div className="sphere">
              <div className="light hemisphere"></div>
              <div className="dark hemisphere"></div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return container;
  }
}
