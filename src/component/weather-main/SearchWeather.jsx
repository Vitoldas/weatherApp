import React, { useState } from 'react';
import './searchWeather.scss';
import axios from 'axios';

const SearchWeather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString('default', { month: 'long' });
  let day = d.toLocaleString('default', { weekday: 'long' });

  let time = d.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="content">
      <div className="container">
        <div className="card">
          <div className="form-styling">
            <input
              className="search-input"
              type="text"
              placeholder="Search City"
              onKeyPress={searchLocation}
              name="search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="card-text-wrapper">
            <div className="text">
              <h2>{data.name}</h2>
              <p className="card-text-1">
                {day}, {month}, {date},{year} <br /> {time}
              </p>
              <p className="card-text-2">Get your weather news here</p>
            </div>
            <hr />
            <div className="weather-info">
              {data.name !== undefined && (
                <div className="bottom">
                  <div className="feels">
                    {data.main ? (
                      <p className="main-temp">
                        Temperature: <br />
                        {((data.main.temp - 32) / 1.8).toFixed()}°C
                      </p>
                    ) : null}
                    <p className="feels-temp">
                      Feels Like <br />{' '}
                      {((data.main.feels_like - 32) / 1.8).toFixed()}
                      °C
                    </p>
                  </div>
                  <div className="humidity">
                    {data.main ? (
                      <p className="bold">Hummidity: {data.main.humidity}% </p>
                    ) : null}
                  </div>
                  <div className="wind">
                    <p>Wind Speed</p>
                    {data.wind ? (
                      <p className="bold">
                        {(data.wind.speed / 1.60934).toFixed()} km/h
                      </p>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
