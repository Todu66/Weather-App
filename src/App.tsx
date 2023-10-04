
import Hero from "./components/Hero";
// import ApiRequest from './components/ApiRequest';
import "./index.css"
function App() {
  const handleCitySubmit = (city: string) => {
    // Handle the city submit logic here
    console.log(`City submitted: ${city}`);
    // You can perform any other actions related to the city submission here
  };

  return (
    
    <div className="">
      <Hero onCitySubmit={handleCitySubmit} />
      {/* <ApiRequest /> */}
    </div>
  )
}

export default App
