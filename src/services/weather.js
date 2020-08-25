import axios from "axios";
import { WEATHER_TYPES, WWO_CODES } from "../constants";

export const getWeatherForLocation = async (city, state) => {
  try {
    const url = `https://wttr.in/~${city}+${state}?format=j1`;
    const data = await axios.get(url);

    if (!data) throw new Error("Failed to get weather data.");

    const currentConditions = {
      temp: data.current_condition.temp_F
    };

    return {
      currentConditions: {}
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

const getDailyForecast = weather => {
  const hourlyTemps = weather.map(hourly => hourly.tempF);
  const tempHigh = Math.max(...hourlyTemps);
  const tempLow = Math.min(...hourlyTemps);

  // WHERE I LEFT OFF: i need to get weather codes for each hourly (really 3 hour) weather object and return the most used one, otherwise the mid-day one. then get a day of week from the date and return
  // and build out the current conditions and forecast in getWeatherForLocation();
};

const mapWeatherCodeToWeatherType = weatherCode => {
  Object.keys(WWO_CODES).forEach(key => {
    if (WWO_CODES[key].includes(weatherCode)) return WEATHER_TYPES[key];
  });

  return null;
};
