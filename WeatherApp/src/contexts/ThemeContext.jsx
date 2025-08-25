import { createContext, useState, useContext, useEffect } from "react";
import temaClaro from "../assets/images/temaClaro.jpg";
import temaOscuro from "../assets/images/temaOscuro.jpg";
import "../ThemeContext.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [backgroundImage, setBackgroundImage] = useState(temaClaro);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setBackgroundImage(theme === "light" ? temaClaro : temaOscuro);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        data-theme={theme} // Agregar el atributo data-theme aquí
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", 
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
