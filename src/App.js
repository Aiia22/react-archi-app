import React from "react";
import WeatherApp from "./WeatherApp";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Paris" />
      </div>
      <footer>
        This React project was coded by {""}
        <a
          href="https://www.linkedin.com/in/tatiana-leclerc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tatiana Leclerc {""}
        </a>
        and is {""}
        <a
          href="https://github.com/Aiia22/react-archi-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        ,
        <a href="." target="_blank" rel="noopener noreferrer">
          {""} hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
