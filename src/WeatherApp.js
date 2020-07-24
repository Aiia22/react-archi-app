import React from "react";

import SearchEngine from "./SearchEngine";
import City from "./City";
import CurrentDate from "./CurrentDate";
import CityWeather from "./CityWeather";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <div className="block1">
          <div className="row">
            <div col-10>
              <SearchEngine />
            </div>
            <div col-2>
              <a href="." className="iconLocation" id="currentLocation">
                <i className="fas fa-map-marker-alt" />
              </a>
            </div>
          </div>
          <City />
          <CurrentDate />
        </div>
        <div className="block2">
          <CityWeather />
        </div>
        <div className="block3">
          <div className="row weather-forecast" id="weekForecast">
            <div className="col-2">
              <Forecast day="Mon" maxTemp="22" minTemp="11" />
            </div>
            <div className="col-2">
              <Forecast day="Tue" maxTemp="26" minTemp="15" />
            </div>
            <div className="col-2">
              <Forecast day="Wed" maxTemp="28" minTemp="17" />
            </div>
            <div className="col-2">
              <Forecast day="Thur" maxTemp="24" minTemp="13" />
            </div>
            <div className="col-2">
              <Forecast day="Fri" maxTemp="17" minTemp="10" />
            </div>
            <div className="col-2">
              <Forecast day="Sat" maxTemp="22" minTemp="11" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        This React project was coded by {""}
        <a href="https://www.linkedin.com/in/tatiana-leclerc/" targert="_blank">
          Tatiana Leclerc {""}
        </a>
        and is {""}
        <a href="." target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
