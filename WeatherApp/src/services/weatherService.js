import { API_KEY, BASE_URL } from "../config";

export const getWeatherByCity = async (city, units = "metric") => {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=es`
    );
    if (!res.ok) throw new Error("Error al obtener el clima");
    return await res.json();
  } catch (err) {
    console.error("Weather API error:", err.message);
    return null;
  }
};
