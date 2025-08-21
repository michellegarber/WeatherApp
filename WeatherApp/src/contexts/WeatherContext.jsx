import { createContext, useState, useContext } from "react";
import { getWeatherByCity } from "../services/weatherService";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city, units) => {
    const data = await getWeatherByCity(city, units);
    if (data) setWeather(data);
  };

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);