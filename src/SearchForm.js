import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showInfo(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "49b631c45785fe73d2a88477803dea22";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showInfo);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (temperature) {
    return (
      <div className="Work">
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
  <footer>
    Coded by
    <a href="" target="_blank" rel="noreferrer"> Andile Vilakazi
    </a>
    and it is Open-sourced on
    <a href="" target="_blank" rel="noreferrer">
        Github
    </a>
    and hosted on 
    <a href="" target="_blank" rel="noreferrer">
        Vercel
    </a>
</footer>
}

