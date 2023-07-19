import React, {useState}from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function  WeatherForecast(props){

     let[loaded, setLoaded]= useState(false);
     let[forecast, setForecast]=useState(null);

     

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if(loaded){
return (
  <div className="WeatherForecast">
    <div className="container">
      <div className="card">
        <div className="WeatherForecast-day">Thu</div>
        <WeatherIcon code="01n" size={35} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}</span>
          <span className="WeatherForecast-temperature-min">10</span>
        </div>
      </div>
    </div>
  </div>
);

}else{
         let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
         let longitude = props.coordinates.lon;
         let latitude = props.coordinates.lat;
         let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}units=metric`;

         axios.get(apiUrl).then(handleResponse);

         return null;
}
}

