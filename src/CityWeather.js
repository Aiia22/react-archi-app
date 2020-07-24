import React from "react";
import "./index.css";

export default function CityWeather() {
  return (
    <div className="CityWeather">
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <ul>
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
