import "./Forecast.css";

export default function Forecast() {
  let weatherData = {
    temperature: "24",
    wind: "6",
    humidity: "55",
    description: "Clear Sky"
  };
  return (
    <div className="row Forecast">
      <div className="col-12 col-md-2 currentWeather weather">
        <div>
          <div id="iconCurrentWeather">
            <div className="icon sunny">
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>
          </div>
          <span className="temperature current" id="currentTemperature">
            {weatherData.temperature}°C
          </span>
        </div>
        {weatherData.description}
        <br />
        Wind: <span id="currentWindSpeed">{weatherData.wind}</span> m/s
        <br />
        Humidity: <span id="currentHumidity">{weatherData.humidity}</span>%
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
  );
}
