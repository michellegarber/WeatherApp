import { useUnit } from "../contexts/UnitContext";

const UnitToggle = () => {
  const { unit, toggleUnit } = useUnit();

  return (
    <button onClick={toggleUnit} className="unit-toggle">
      {unit === "metric" ? "°C" : "°F"}
    </button>
  );
};

export default UnitToggle;
