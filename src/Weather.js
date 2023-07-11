import React from "react";
import axios from "axios";
import "./Weather.css";

export default function () {
  return (
    <div className="Wrapping">
  <div className="Weather">

      <div className="row">
        <div className="col-9">
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              autoFocus="on"
              className="form-control"
            />
          </form>
        </div>

        <div className="col-3">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>


      <h1>London</h1>
      <ul>
        <li>Wednesday 07:00 </li>
        <li> Mostly Cloudy</li>
      </ul>


      <div className="row">

        <div className="col-1">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          
          />
          </div>

          <div className="col-1">
           <span className="temperature">19</span>
          <span className="unit">C</span>         
         </div>

         <div className="col-4"></div>

        

        <div className="col-6">
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>

      </div>
      </div>
      </div>
  
  );
}
