import React from 'react';
import clear from '../Assets/clear.png';
import clouds from '../Assets/cloud.png';
import drizzle from '../Assets/drizzle.png';
import snow from '../Assets/snow.png';

export type WeatherData = {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
};

const ApiRequest: React.FC<{ weatherData: WeatherData }> = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.weather[0]) {
    return null;
  }

  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  let weatherImage: JSX.Element | null = null;

  if (weatherDescription === 'scattered clouds' || weatherDescription === 'overcast clouds' || weatherDescription === 'broken clouds') {
    weatherImage = <img className="max-w-[200px]" src={clouds} alt="Cloudy weather" />;
  } else if (weatherDescription === 'clear sky') {
    weatherImage = <img className="max-w-[200px]" src={clear} alt="Clear weather" />;
  } else if (weatherDescription === 'rain' || weatherDescription === 'light rain') {
    weatherImage = <img className="max-w-[200px]" src={drizzle} alt="Rainy weather" />;
  } else if (weatherDescription === 'snow') {
    weatherImage = <img className="max-w-[200px]" src={snow} alt="Snowy weather" />;
  }

  return (
    <div className="flex flex-col items-center text-[#fff] mt-3">
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
      {weatherImage}
    </div>
  );
};

export default ApiRequest;
