import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready:true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    description:response.data.weather[0].description,
    iconUrl:" ",
    wind:response.data.wind.speed,
    city:response.data.name
  } );
}

if(weatherData.ready){
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


      <h1>{weatherData.city}</h1>
      <ul>
        <li>Wednesday 07:00 </li>
        <li>{weatherData.description}</li>
      </ul>


      <div className="row">

        <div className="col-1">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
          
          />
          </div>

          <div className="col-1">
           <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">C</span>         
         </div>

         <div className="col-4"></div>

        

        <div className="col-6">
          <ul>
  
            <li>Humidity:{weatherData.humidity}</li>
            <li>Wind:{weatherData.wind}</li>
          </ul>
        </div>

      </div>
      </div>
      </div>
  
  );
}else{
const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
let city = "London"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return"Loading...";
}
}