import React from "react";
import "./index.css";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form id="search-form" className="searchF">
        <input
          type="search"
          placeholder="Type a city.."
          autoComplete="off"
          className="BarStyle"
          id="searchBar"
        />
        <input
          type="submit"
          value="Search"
          className="BarStyle"
          id="submitCity"
        />
        <a href="." className="iconLocation" id="currentLocation">
          <i className="fas fa-map-marker-alt" />
        </a>
      </form>
    </div>
  );
}
