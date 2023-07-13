import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li>{props.data.description}</li>
      </ul>


      <div className="row">

        <div className="col-2">
          <WeatherIcon code={props.data.icon}/>
        
          </div>

          <div className="col-1">
           <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="unit">C</span>         
         </div>

         <div className="col-3"></div>

        

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