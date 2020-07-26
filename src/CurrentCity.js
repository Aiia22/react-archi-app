import React from "react";
import "./index.css";
import "./CurrentCity.css";
import "./WeatherApp.css";
import { formatDate } from "./Utilities";

export default function CurrentCity(props) {
  return (
    <div className="CurrentCity">
      <h1>{props.WeatherData.city}</h1>
      <div className="CurrentDate">
        {formatDate(props.WeatherData.timestamp)}
        <small className="dislaimer">* Last uptaded</small>
      </div>
    </div>
  );
}