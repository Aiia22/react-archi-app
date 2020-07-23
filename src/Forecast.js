import React from "react";
import "./index.css";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="day1" id="dayOne">
        {props.day}
      </div>
      <img src="img/02d.png" id="iWF" alt="icon-weather" />
      <div className="forecastTemperature">
        <strong>{props.maxTemp}° </strong>
        <span>{props.minTemp}°</span>
      </div>
    </div>
  );
}
