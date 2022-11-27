/** @format */

import React, { useState } from "react";
import axios from "axios";
import TopContent from "./TopContent";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";
import "./Content.css";

export default function Content(props) {
  //let apiKey = "91e4be9d3f0ce62462b88df7804804ae";
  let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let apiAstronomy = "b99861f9264143c2bd4a20afe37f2ab0";
  let [city, setCity] = useState(props.defaultCity);
  let [astronomy, setAstronomy] = useState({});
  function updateCity(e) {
    setCity(e.target.value);
  }
  let [weatherData, setWeatherData] = useState({ ready: false });
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
    let urlAstronomy = `https://api.ipgeolocation.io/astronomy?apiKey=${apiAstronomy}&lat=${response.data.coord.lat}&long=${response.data.coord.lon}`;
    axios.get(urlAstronomy).then(updateAstronomy);
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

  if (weatherData.ready) {
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
                {weatherData.temperature}°C
              </span>
            </div>
            {weatherData.description}
            <br />
            Wind: <span id="currentWindSpeed">{weatherData.wind}</span> m/s
            <br />
            Humidity: <span id="currentHumidity">{weatherData.humidity}</span>
            %
            <br />
            <div className="btn-group mx-auto mt-1">
              <button className="btn btn-success" disabled id="celsius">
                °C
              </button>
              <button className="btn btn-success" id="fahrenheit">
                °F
              </button>
            </div>
          </div>
          <div className="col-12 col-md-2 nextDate weather">
            <div className="dayPlus1"></div>
            <div className="icon sun-cloudy">
              <div className="cloud"></div>
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>
            max <span className="temperature">25°C</span>
            <br />
            min <span className="temperature">17°C</span>
            <br />
            <div className="realFeel">
              RealFeel
              <br />
              <span className="temperature">23°C</span>
            </div>
          </div>
          <div className="col-12 col-md-2 nextDate weather">
            <div className="dayPlus2"></div>
            <div className="icon sunny">
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>
            max <span className="temperature">27°C</span>
            <br />
            min <span className="temperature">22°C</span>
            <br />
            <div className="realFeel">
              RealFeel
              <br />
              <span className="temperature">25°C</span>
            </div>
          </div>
          <div className="col-12 col-md-2 nextDate weather">
            <div className="dayPlus3"></div>
            <div className="icon cloudy">
              <div className="cloud"></div>
              <div className="cloud"></div>
            </div>
            max <span className="temperature">29°C</span>
            <br />
            min <span className="temperature">23°C</span>
            <br />
            <div className="realFeel">
              RealFeel
              <br />
              <span className="temperature">26°C</span>
            </div>
          </div>
          <div className="col-12 col-md-2 nextDate weather">
            <div className="dayPlus4"></div>
            <div className="icon sun-cloudy">
              <div className="cloud"></div>
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>
            max <span className="temperature">22°C</span>
            <br />
            min <span className="temperature">15°C</span>
            <br />
            <div className="realFeel">
              RealFeel
              <br />
              <span className="temperature">19°C</span>
            </div>
          </div>
          <div className="col-12 col-md-2 nextDate weather">
            <div className="dayPlus5"></div>
            <div className="icon rainy">
              <div className="cloud"></div>
              <div className="rain"></div>
            </div>
            max <span className="temperature">19°C</span>
            <br />
            min <span className="temperature">14°C</span>
            <br />
            <div className="realFeel">
              RealFeel
              <br />
              <span className="temperature">17°C</span>
            </div>
          </div>
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
