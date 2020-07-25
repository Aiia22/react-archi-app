import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import WeatherApp from "./WeatherApp";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
