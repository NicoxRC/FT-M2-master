import React, { useState } from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import './App.css';

export default function App() {

  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

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
            img: response_json.weather[0].icon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert('City not found.')
        }
      })
  };

  function onClose(id) {
    console.log('ll');
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}
