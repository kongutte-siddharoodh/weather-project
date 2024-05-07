import rain from "./assets/rain.png";
import partly_cloudy from "./assets/partly_cloudy.png";
import sunny from "./assets/sunny.png";
import patchy_rainy from "./assets/patchy_rainy.png";
import mist from "./assets/mist.png";
import overcast from "./assets/overcast.png";

function Current_Weather({ weather }) {
  function weatherIcon() {
    if (weather.current.condition.text === "Partly cloudy") {
      return <img src={partly_cloudy} />;
    } else if (weather.current.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (weather.current.condition.text === "Patchy rain nearby") {
      return <img src={patchy_rainy} />;
    } else if (weather.current.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.current.condition.text === "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (weather.current.condition.text === "Overcast ") {
      return <img src={overcast} />;
    } else if (weather.current.condition.text === "Moderate rain") {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  return (
    <div>
      {" "}
      {weather && (
        <div className="text-white bg-[#222831] mt-16 rounded-md">
          <div className="temp w-80 h-20 flex justify-center items-center gap-4">
            <div className="temp-img w-16">{weatherIcon()}</div>
            <div className="temp-val">{weather.current.temp_c} °C</div>
          </div>
          <div className="place-name w-80 h-10 flex justify-center items-center">
            {weather.location.name}, {weather.location.region},{" "}
            {weather.location.country}
          </div>
          <hr />
          <div className="date-time w-70 h-14 p-2 flex justify-center items-center ml-10 mr-10">
            <div className="date-time">{weather.location.localtime}</div>
          </div>
          <hr />
          <div className="wind-humidity w-70 flex items-center justify-center gap-5 p-2 mt-2 mb-2">
            <div className="wind bg-[#3665ff] p-2 flex justify-center items-center flex-col rounded-md">
              <div className="wind-speed">Wind Speed</div>
              <div className="wind-speed-value">
                {weather.current.wind_kph} km/hr
              </div>
            </div>
            <div className="humidity bg-[#219c58] p-2 flex justify-center items-center flex-col rounded-md">
              <div className="humidity-text">Humidity</div>
              <div className="humidity-value">
                {weather.current.humidity} g/m³
              </div>
            </div>
          </div>
          <hr />
          <div className="heat-index w-70 h-14 p-2 flex items-center justify-between ml-10 mr-10">
            <div className="heat-index-text">Heat Index</div>
            <div className="heat-value">
              {weather.forecast.forecastday[0].hour[0].heatindex_c}
            </div>
          </div>
          <hr />
          <div className="overall-weather flex items-center justify-center w-70 h-12">
            {weather.current.condition.text}
          </div>
        </div>
      )}
    </div>
  );
}

export default Current_Weather;
