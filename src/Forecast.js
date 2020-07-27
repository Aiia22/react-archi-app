import React, { useState } from "react";
import ForecastDays from "./ForecastDays";
import axios from "axios";

import "./index.css";
import "./App.css";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(null);

  function fetchForecast(response) {
    console.log(response);
    setWeatherForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === weatherForecast.city.name) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <ForecastDays dataForecast={weatherForecast.list[0]} />
          </div>
          <div className="col-2">
            {" "}
            <ForecastDays dataForecast={weatherForecast.list[1]} />
          </div>
          <div className="col-2">
            <ForecastDays dataForecast={weatherForecast.list[2]} />
          </div>
          <div className="col-2">
            <ForecastDays dataForecast={weatherForecast.list[3]} />
          </div>
          <div className="col-2">
            {" "}
            <ForecastDays dataForecast={weatherForecast.list[4]} />
          </div>
          <div className="col-2">
            <ForecastDays dataForecast={weatherForecast.list[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrlF = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    console.log("test");
    axios.get(apiUrlF).then(fetchForecast);

    return null;
  }
}
