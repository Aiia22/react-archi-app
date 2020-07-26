import React from "react";
import { formatTime } from "./Utilities";

import "./index.css";
import "./CityWeather.css";
import "./WeatherApp.css";

export default function CityWeather(props) {
  console.log(props.WeatherData.humidity);
  return (
    <div className="CityWeather">
      <div className="row">
        <div className="col-7">
          <div className="temperature">
            <span>
              <img
                src="img/02n.png"
                className="iconW"
                alt="Icon current weather"
              />
            </span>
            <span id="currentTemp" className="temp">
              {Math.round(props.WeatherData.temperature)}{" "}
            </span>
            <small className="unit">
              <a href="." id="celsius" className="active">
                °C{" "}
              </a>{" "}
              |
              <a href="." id="fahr">
                °F
              </a>
            </small>
          </div>
          <div className="weatherDescription" id="description">
            {props.WeatherData.description}
          </div>
        </div>
        <div className="col-5">
          <ul className="WeatherInfo">
            <li className="precipitation">
              {" "}
              Humidity:{props.WeatherData.humidity}%{" "}
            </li>
            <li className="wind">
              Wind: {Math.round(props.WeatherData.wind)} km/h
            </li>
            <li className="sunrise">
              Sunrise: {formatTime(props.WeatherData.sunrise)}{" "}
            </li>
            <li className="sunset">
              Sunset:{formatTime(props.WeatherData.sunset)}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
