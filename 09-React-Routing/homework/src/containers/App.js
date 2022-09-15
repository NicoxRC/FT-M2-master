import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import About from "../components/About";
import Ciudad from '../components/Ciudad';
import './App.css';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function App() {

  const [cities, setCities] = useState([]);

  function onSearch(city) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then(response_json => {
        if (response_json.main !== undefined) {
          const city = {
            min: Math.round(response_json.main.temp_min),
            max: Math.round(response_json.main.temp_max),
            name: response_json.name,
            id: response_json.id,
            img: response_json.weather[0].icon,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            weather: response_json.weather[0].main,
            clouds: response_json.clouds.all,
            latitud: response_json.coord.lat,
            longitud: response_json.coord.lon,
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert('City not found.')
        }
      })
  };

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        {/* <Route path='/' render={() => <Nav onSearch={onSearch} />} /> */}
        <Route
          path='/about'
          element={<About />}
        />
        <Route path='/ciudad/:ciudadId'
          element={<Ciudad onFilter={onFilter} />} />

        <Route exact path='/' element={<Cards cities={cities} onClose={onClose} />} />
      </Routes>
    </div>
  );
}
