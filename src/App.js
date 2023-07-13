import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="London" />
      </div>
  
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/EduardMat/react-weather-app" target="blanc">
          Sefora Noata{" "}
        </a>{" "}
        and is open sourced on Github.
      </footer>
    </div>
  );
}

export default App;
