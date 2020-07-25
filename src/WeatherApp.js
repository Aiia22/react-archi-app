import React, { useEffect, useState } from "react";

import SearchEngine from "./SearchEngine";
import CurrentCity from "./CurrentCity";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";

export default function WeatherApp() {
  const city = "dublin";

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrlD = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlD, apiUrlF).then((response, result) => {
      setCurrentWeather(response.data);
    });
  }, [city]);

  console.log(currentWeather);

  if (!currentWeather) {
    // currentWeather is not ready yet
    return <p>Loading...</p>;
  }

  return (
    <div className="WeatherApp">
      <div className="container">
        <div className="block1">
          <div className="row">
            <div className="col-10">
              <SearchEngine />
            </div>
            <div className="col-2">
              <a href="." className="iconLocation" id="currentLocation">
                <i className="fas fa-map-marker-alt" />
              </a>
            </div>
          </div>
          <CurrentCity
            city={currentWeather.name}
            timestamp={currentWeather.dt}
          />
        </div>
        <div className="block2">
          <CityWeather
            temp={currentWeather.main.temp}
            humidity={currentWeather.main.humidity}
            wind={currentWeather.wind.speed} // props.speed
            sunrise={currentWeather.sys.sunrise}
            sunset={currentWeather.sys.sunset}
            WDescription={currentWeather.weather[0].description}
          />
        </div>
        <Forecast temp={currentWeather.main.temp} />
      </div>
      <footer>
        This React project was coded by {""}
        <a href="https://www.linkedin.com/in/tatiana-leclerc/" targert="_blank">
          Tatiana Leclerc {""}
        </a>
        and is {""}
        <a href="." target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
