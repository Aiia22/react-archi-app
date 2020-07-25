import React from "react";
import { formatTime } from "./Utilities";

import "./index.css";
import "./CityWeather.css";

export default function CityWeather(props) {
  return (
    <div className="CityWeather">
      <div className="container">
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
                {Math.round(props.temp)}{" "}
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
              {props.WDescription}
            </div>
          </div>
          <div className="col-5">
            <ul className="WeatherInfo">
              <li className="precipitation"> Humidity:{props.humidity}% </li>
              <li className="wind">Wind: {Math.round(props.wind)} km/h</li>
              <li className="sunrise">Sunrise: {formatTime(props.sunrise)} </li>
              <li className="sunset">Sunset:{formatTime(props.sunset)} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
