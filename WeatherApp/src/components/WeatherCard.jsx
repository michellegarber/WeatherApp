import { useWeather } from "../contexts/WeatherContext";
import { useUnit } from "../contexts/UnitContext";

const WeatherCard = () => {
  const { weather } = useWeather();
  const { unit } = useUnit();

  if (!weather) {
    return <p className="no-data">Busca una ciudad para ver el clima</p>;
  }

  const temperature =
    unit === "metric" ? weather.main.temp : weather.main.temp;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{Math.round(temperature)}° {unit === "metric" ? "C" : "F"}</p>
      <p>{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
};

export default WeatherCard;
