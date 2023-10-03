import { useEffect, useState } from 'react';
import ApiRequest from "./ApiRequest";
//93ca0a52321cfb1ac68e467e9b2e53dc
const Hero = ({ onCitySubmit }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=93ca0a52321cfb1ac68e467e9b2e53dc`
        );
        const data = await response.json();
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
    // main div
    <div className="max-w-[1640px] h-[100vh] bg-[#1C1C1C] p-2 text-center">
      {/* for top location and input */}
      <div className="flex justify-center flex-col">
        <h2 className="text-[#fff]">Choose Location</h2>
        <input
          className="max-w-[400px] bg-[#393939] p-2 focus:outline-none rounded-full text-[#D4D4D4]"
          type="text"
          placeholder="enter city..."
          value={city}
          onChange={handleInputChange}
          
        />
      </div>

      {/* Returned data from api + default component ApiResult*/}
      {weatherData && <ApiRequest weatherData={weatherData} />}
    </div>
  );
};
export default Hero;
