import Navbar from "../components/Navbar";
import Current_Weather from "../components/Current_Weather";
import Upcoming_Days_Weather from "../components/Upcoming_Days_Weather";
import { useState } from "react";
import Loading from "../components/Loading";

function Home() {
  const [weather, setWeather] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (city) => {
    setLoading(true);
    fetchWeatherData(city);
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=c76a7e9440fe4403875114750241304&q=${city}&units=metric&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setAlert("");
      } else {
        setWeather(null);
        setAlert(
          `City "${city}" not found, Please enter the correct city name`
        );
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
      setAlert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {alert && (
        <div className="alert text-center font-semibold font-[#222831] bg-red-300 p-4">
          {alert}
        </div>
      )}
      <Navbar onSubmit={handleSubmit} />
      {loading && <Loading />}
      {!loading && weather && (
        <div className="weather-main-container flex justify-between pl-40 gap-20 h-full w-full items-center">
          <Current_Weather weather={weather} />
          <div className="upcoming_days_weather_container pr-28 mt-16">
            <Upcoming_Days_Weather weather={weather} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
