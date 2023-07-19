import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Image from "./Image";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    //search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-2">
              <Image />
            </div>
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3">
              <input type="submit" value="search" className="btn btn-warning" />
            </div>
          </div>
        </form>
        <hr />
        <hr />
        <hr />

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
  
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
