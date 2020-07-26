import React from "react";

import "./Forecast.css";
import "./App.css";

export default function ForecastDays(props) {
  function formatDateForecast() {
    let date = new Date(props.dataForecast.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div className="forecastDays">
      <div className="hour">{formatDateForecast()}</div>

      <img
        src={"img/" + props.dataForecast.weather[0].icon + ".png"}
        id="iWF"
        alt="icon-weather"
      />
      <div className="forecastTemperature">
        <strong>{Math.round(props.dataForecast.main.temp_max)}° </strong>
        <span>{Math.round(props.dataForecast.main.temp_min)}°</span>
      </div>
    </div>
  );
}
