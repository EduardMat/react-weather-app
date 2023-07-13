import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li>{props.data.description}</li>
      </ul>


      <div className="row">

        <div className="col-1">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
          
          />
          </div>

          <div className="col-1">
           <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="unit">C</span>         
         </div>

         <div className="col-4"></div>

        

        <div className="col-6">
          <ul>
  
            <li>Humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind}</li>
          </ul>
        </div>

      </div>
      </div>
    );
}