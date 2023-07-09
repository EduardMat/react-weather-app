import React from "react";
import axios from "axios";
import "./Weather.css";

export default function () {
  return (
    <div className="Weather">

      <div className="row">

        <div className="col-9">
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </form>
          </div>

        <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary"/>
        </div>

      </div>
      <h1>London</h1>
      <ul>
        <li>Wednesday 07:00 </li>
        <li> Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6 C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
