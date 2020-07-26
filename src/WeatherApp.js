import React, { useState } from "react";

import CurrentCity from "./CurrentCity";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";
import axios from "axios";

import "./index.css";
import "./App.css";
import "./WeatherApp.css";
import "./CurrentCity.css";
import "./CityWeather.css";

export default function WeatherApp(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  const [city, setCity] = useState("Dublin");

  function fetchWeatherData(response) {
    console.log(response);
    setCurrentWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      timestamp: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
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
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(fetchWeatherData);
  }

  console.log(currentWeather);

  if (currentWeather.ready) {
    return (
      <div className="WeatherApp">
        <div className="block1">
          <div className="row">
            <div className="col-10">
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
            <div className="col-2">
              <a href="." className="iconLocation" id="currentLocation">
                <i className="fas fa-map-marker-alt" />
              </a>
            </div>
          </div>
          <CurrentCity WeatherData={currentWeather} />
        </div>
        <div className="block2">
          <CityWeather WeatherData={currentWeather} />
        </div>
        <Forecast lat={currentWeather.lat} lon={currentWeather.lon} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
