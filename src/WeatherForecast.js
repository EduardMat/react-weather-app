import React, {useState}from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function  WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

     

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if(loaded){
        console.log(forecast);
return (
  <div className="WeatherForecast">
    <div className="container">
      <WeatherForecastDay data={forecast[0]}/>
      </div>
    </div>
);

}else{
        
         let longitude = props.coordinates.lon;
         let latitude = props.coordinates.lat;
         let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
         let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

         axios.get(apiUrl).then(handleResponse);

         return null;
}
}

