import React, { useState } from "react";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farhenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemp">
        <span>
          <img src="img/02n.png" className="iconW" alt="Icon current weather" />{" "}
        </span>
        <span id="currentTemp" className="temp">
          {Math.round(props.celsius)}{" "}
        </span>
        <small className="unit">
          <a href="." id="celsius" className="active">
            {" "}
            °C{" "}
          </a>{" "}
          |
          <a href="." id="fahr" onClick={convFahrenheit}>
            °F{" "}
          </a>
        </small>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <span>
          <img src="img/02n.png" className="iconW" alt="Icon current weather" />{" "}
        </span>
        <span id="currentTemp" className="temp">
          {Math.round(farhenheit())}{" "}
        </span>
        <small className="unit">
          <a href="." id="celsius" className="active" onClick={convCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          |
          <a href="." id="fahr">
            °F{" "}
          </a>
        </small>
      </div>
    );
  }
}
