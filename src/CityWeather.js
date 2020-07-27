import React from "react";
import { formatTime } from "./Utilities";
import CurrentTemp from "./CurrentTemp";

import "./index.css";
import "./App.css";
import "./CityWeather.css";

export default function CityWeather(props) {
  return (
    <div className="CityWeather">
      <div className="row">
        <div className="col-7">
          <div className="temperature">
            <CurrentTemp
              celsius={props.WeatherData.temperature}
              icon={props.WeatherData.icon}
            />
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
