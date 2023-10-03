import React from "react";

const ApiRequest = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.weather ||
    !weatherData.weather[0]
  ) {
    return null; // Don't render anything if the data is not yet available or incomplete
  }

  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  return (
    <div className="weather-info text-[#fff]">
      <h2>Weather in {name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Weather: {weatherDescription}</p>
    </div>
  );
};

export default ApiRequest;
