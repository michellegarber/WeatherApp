import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UnitProvider } from "./contexts/UnitContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <UnitProvider>
        <WeatherProvider>
          <div className="app">
            <Home />
          </div>
        </WeatherProvider>
      </UnitProvider>
    </ThemeProvider>
  );
}

export default App;
