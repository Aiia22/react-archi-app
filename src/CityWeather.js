import React from "react";
import "./index.css";
import "./CityWeather.css";

export default function CityWeather() {
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
                22{" "}
              </span>
              <small className="unit">
                <a href="." id="celsius" className="active">
                  {" "}
                  °C{" "}
                </a>{" "}
                |
                <a href="." id="fahr">
                  °F
                </a>
              </small>
            </div>
            <div className="weatherDescription" id="description">
              Cloud
            </div>
          </div>
          <div className="col-5">
            <ul className="WeatherInfo">
              <li className="precipitation"> Humidity:15% </li>
              <li className="wind">Wind: 22 km/h</li>
              <li className="sunrise">Sunrise: 05:44 </li>
              <li className="sunset">Sunset:21:55 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
