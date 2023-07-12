import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const[city, setCity]= useState(props.defaultCity);
  function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready:true,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description:response.data.weather[0].description,
    iconUrl:" ",
    wind:response.data.wind.speed,
    city:response.data.name
  } );
}

function handleSubmit(event){
  event.preventDefault();
  //search for a city
}

function handleCityChange(event){
  setCity(event.target.value);
  alert(city);
  

}

if(weatherData.ready){
  return (
  <div className="Weather">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          
            <input
              type="search"
              placeholder="Enter a city.."
              autoFocus="on"
              className="form-control"
              onChange={handleCityChange}
            />
      </div>

        <div className="col-3">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>
    </form>

<WeatherInfo data={weatherData} />
 </div> 
  );
}else{
const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return"Loading...";
}
}