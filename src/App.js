import { useState } from 'react';

import Search from './components/Search/Search';
import Wrapper from './components/Wrapper/Wrapper';

import styles from './App.module.css';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = 'e824cbdd987431b5089870758df3ebc8';

  const getWeather = value => {
    if (value === 'Enter') {
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

  return (
    <div className={styles.App}>
      <Search
        value={location}
        setLocationHandler={setLocation}
        keyPressHandler={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <p>
          Welcome to the weather app! Enter in a city to get the weather of.
        </p>
      ) : (
        <Wrapper data={weatherData} />
      )}
    </div>
  );
};

export default App;
