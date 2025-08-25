import { useState } from "react";
import { useWeather } from "../contexts/WeatherContext";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
