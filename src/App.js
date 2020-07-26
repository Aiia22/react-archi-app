import React from "react";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Dublin" />
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
