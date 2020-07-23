import React from "react";
import "./index.css";

export default function CityWeather() {
  return (
    <div className="CityWeather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="precipitation"> Humidity:15% </p>
            <p className="wind">Wind: 22 km/h</p>
          </div>
          <div className="col-6">
            <p className="sunrise">Sunrise: 05:44 </p>
            <p className="sunset">Sunset:21:55 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
