import React from "react";
import rain from "./assets/rain.png";
import partly_cloudy from "./assets/partly_cloudy.png";
import sunny from "./assets/sunny.png";
import patchy_rainy from "./assets/patchy_rainy.png";
import mist from "./assets/mist.png";
import overcast from "./assets/overcast.png";

function Upcoming_Days_Weather({ weather }) {
  function weatherIconFirst() {
    if (
      weather.forecast.forecastday[1].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[1].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[1].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[1].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[1].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[1].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[1].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  function weatherIconSecond() {
    if (
      weather.forecast.forecastday[2].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[2].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[2].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[2].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[2].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[2].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[2].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  function weatherIconThird() {
    if (
      weather.forecast.forecastday[3].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[3].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[3].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[3].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[3].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[3].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[3].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  function weatherIconFourth() {
    if (
      weather.forecast.forecastday[4].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[4].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[4].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[4].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[4].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[4].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[4].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  function weatherIconFifth() {
    if (
      weather.forecast.forecastday[5].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[5].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[5].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[5].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[5].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[5].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[5].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  function weatherIconSixth() {
    if (
      weather.forecast.forecastday[6].day.condition.text === "Partly cloudy"
    ) {
      return <img src={partly_cloudy} />;
    } else if (weather.forecast.forecastday[6].day.condition.text === "Sunny") {
      return <img src={sunny} />;
    } else if (
      weather.forecast.forecastday[6].day.condition.text ===
      "Patchy rain nearby"
    ) {
      return <img src={patchy_rainy} />;
    } else if (weather.forecast.forecastday[6].day.condition.text === "Mist") {
      return <img src={mist} />;
    } else if (
      weather.forecast.forecastday[6].day.condition.text ===
      "Moderate or heavy rain with thunder"
    ) {
      return <img src={rain} />;
    } else if (
      weather.forecast.forecastday[6].day.condition.text === "Overcast "
    ) {
      return <img src={overcast} />;
    } else if (
      weather.forecast.forecastday[6].day.condition.text === "Moderate rain"
    ) {
      return <img src={patchy_rainy} />;
    } else {
      <img src="" alt="can't load" />;
    }
  }

  return (
    <div>
      {" "}
      {weather ? (
        <div className="flex justify-center items-center flex-wrap gap-16">
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[1].date}
            </div>
            <div className="day-temp-image">{weatherIconFirst()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[1].day.maxtemp_c}/
              {weather.forecast.forecastday[1].day.mintemp_c} °C
            </div>
          </div>
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[2].date}
            </div>
            <div className="day-temp-image">{weatherIconSecond()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[2].day.maxtemp_c}/
              {weather.forecast.forecastday[2].day.mintemp_c} °C
            </div>
          </div>
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[3].date}
            </div>
            <div className="day-temp-image">{weatherIconThird()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[3].day.maxtemp_c}/
              {weather.forecast.forecastday[3].day.mintemp_c} °C
            </div>
          </div>
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[4].date}
            </div>
            <div className="day-temp-image">{weatherIconFourth()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[4].day.maxtemp_c}/
              {weather.forecast.forecastday[4].day.mintemp_c} °C
            </div>
          </div>
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[5].date}
            </div>
            <div className="day-temp-image">{weatherIconFifth()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[5].day.maxtemp_c}/
              {weather.forecast.forecastday[5].day.mintemp_c} °C
            </div>
          </div>
          <div className="day-weather-container rounded-md text-white bg-[#222831] h-36 w-32 flex flex-col items-center justify-around">
            <div className="day border-b-2 border-white">
              {weather.forecast.forecastday[6].date}
            </div>
            <div className="day-temp-image">{weatherIconSixth()}</div>
            <div className="day-temp">
              {weather.forecast.forecastday[6].day.maxtemp_c}/
              {weather.forecast.forecastday[6].day.mintemp_c} °C
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Upcoming_Days_Weather;
