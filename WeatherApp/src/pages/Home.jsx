import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ThemeToggle from "../components/ThemeToggle";
import UnitToggle from "../components/UnitToggle";

const Home = () => {
  return (
    <div className="home">
      <div className="top-bar">
        <ThemeToggle />
        <UnitToggle />
      </div>
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default Home;
