import styles from './App.module.css';
import { useState } from 'react';
import Search from './components/Search/Search';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = 'e824cbdd987431b5089870758df3ebc8';

  const getWeather = e => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${API_KEY}`
      )
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
          setLocation('');
        });
    }
  };

  // const valueChangeHandler = value => setLocation(value);

  return (
    <div className={styles.App}>
      <div className="search">
        {/* <Search
          value={location}
          onChange={valueChangeHandler}
          onGetWeather={getWeather}
        /> */}
        <input
          type="text"
          className="input"
          placeholder="Enter City..."
          onChange={e => setLocation(e.target.value)}
          value={location}
          onKeyDown={getWeather}
        />
      </div>

      {typeof weatherData.main === 'undefined' ? (
        <p>
          Welcome to the weather app! Enter in a city to get the weather of.
        </p>
      ) : (
        <div className="main">
          <h1 className="name">{weatherData.name}</h1>
          <div className="temp">{weatherData.main.temp}</div>
          <div className="weather">{weatherData.weather[0].main}</div>
        </div>
      )}
    </div>
  );
};

export default App;
