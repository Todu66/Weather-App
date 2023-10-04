import React, { useEffect, useState, ChangeEvent } from 'react';
import ApiRequest, { WeatherData } from './ApiRequest';

const Hero: React.FC<{ onCitySubmit: (city: string) => void }> = ({}) => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=93ca0a52321cfb1ac68e467e9b2e53dc`
        );
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    // Fetch data automatically whenever the city state changes
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div className="flex flex-col max-w-[1640px] h-[100vh] bg-[#1C1C1C] p-2 text-center items-center justify-center">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-[#fff]">Choose Location</h2>
        <input
          className="w-[260px] bg-[#393939] p-2 focus:outline-none rounded-full text-[#D4D4D4] sm:w-[]"
          type="text"
          placeholder="enter city..."
          value={city}
          onChange={handleInputChange}
        />
      </div>
      {weatherData && <ApiRequest weatherData={weatherData} />}
    </div>
  );
};

export default Hero;
