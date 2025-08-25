import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? "🌞 Claro" : "🌙 Oscuro"}
    </button>
  );
};

export default ThemeToggle;
