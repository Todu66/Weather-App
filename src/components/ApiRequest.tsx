import React from "react";
import clear from "../Assets/clear.png";
import clouds from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/search.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";
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

  let weatherImage;
  if (weatherDescription === "scattered clouds" || weatherDescription === "overcast clouds" || weatherDescription === "broken clouds") {
    weatherImage = <img className="max-w-[200px]" src={clouds} alt="Cloudy weather" />;
  } else if (weatherDescription === "clear sky") {
    weatherImage = <img className="max-w-[200px]" src={clear} alt="Rainy weather" />;
  } else if (weatherDescription === "rain" || weatherDescription === "light rain") {
    weatherImage = <img className="max-w-[200px]" src={drizzle} alt="Rainy weather" />;
  } else if (weatherDescription === "snow") {
    weatherImage = <img className="max-w-[200px]" src={snow} alt="Rainy weather" />;
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
