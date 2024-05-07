import React, { useState } from "react";
import logo from "./assets/weather_logo.png";
import search_icon from "./assets/search_icon.png";
import { Link } from "react-router-dom";

function Navbar({ onSubmit }) {
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setAlert("Please enter a city name");
    } else {
      onSubmit(city);
      setCity("");
      setAlert("");
    }
  };

  return (
    <div>
      {alert && (
        <div className="alert text-center font-semibold font-[#222831] bg-red-300 p-4">
          {alert}
        </div>
      )}
      <div className="nav-bar w-full h-16 bg-[#222831] flex items-center justify-between py-9">
        <Link className="nav-logo flex justify-center items-center gap-4 text-white font-medium text-2xl pl-14">
          <img src={logo} id="logo" />
          Weather Sense
        </Link>
        <form
          className="search-weather flex gap-4 justify-center items-center pr-14"
          onSubmit={submit}>
          <input
            value={city}
            onChange={handleChange}
            className="search-bar text-[#222831] border-none outline-none p-1 pl-2 w-96 bg-[#EEEEEE] rounded-md hover:outline-6 hover:outline-[#EEEEEE] active:outline-6 active:outline-[#EEEEEE] transition-all ease-in-out"
            placeholder="Enter The Place"
          />
          <button
            type="submit"
            className="search-btn h-8 w-8 bg-[#EEEEEE] p-2 rounded-full hover:bg-[#36c742] hover:h-10 hover:w-10 transition-all ease-in-out flex justify-center items-center">
            <img src={search_icon} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
