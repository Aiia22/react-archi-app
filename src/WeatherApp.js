import React, { useState } from "react";

import CurrentCity from "./CurrentCity";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./index.css";
import "./App.css";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  let apiKey = "094780c710fa4efd669f0df8c3991927";

  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function fetchWeatherData(response) {
    setCurrentWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      timestamp: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      sunset: response.data.sys.sunset,
      sunrise: response.data.sys.sunrise,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(fetchWeatherData);
  }

  if (currentWeather.ready) {
    return (
      <div className="WeatherApp">
        <div className="block1">
          <div className="row">
            <div className="col-6">
              <form
                id="search-form"
                className="searchF"
                onSubmit={handleSubmit}
              >
                <input
                  type="search"
                  placeholder="Type a city.."
                  autoComplete="off"
                  className="BarStyle"
                  id="searchBar"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="BarStyle"
                  id="submitCity"
                />
              </form>
            </div>

            <div className="col-6">
              <img
                src="img/planet (1).svg"
                className="imgApp"
                alt="Planet"
                width="100px"
              />
            </div>
          </div>
          <CurrentCity WeatherData={currentWeather} />
        </div>
        <div className="block2">
          <CityWeather WeatherData={currentWeather} />
        </div>
        <div className="block3">
          <Forecast city={currentWeather.city} />
        </div>
      </div>
    );
  } else {
    search();
    return <Loader type="Audio" color="#407DA5" height={222} width={444} />;
  }
}
