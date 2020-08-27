import React, { useState, useEffect } from "react";
import { getWeatherForLocation } from "./services";

export const App = () => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      const data = await getWeatherForLocation("Roseville", "Minnesota");
      setState({ ...data });
      setIsLoading(false);
    };

    getWeather();
  }, []);

  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          <h5>Current</h5>
          <div>Current: {state.currentConditions.tempCurrent}</div>
          <div>High: {state.currentConditions.tempHigh}</div>
          <div>Low: {state.currentConditions.tempLow}</div>
          <div>Description: {state.currentConditions.weatherDescription}</div>

          <br />

          <h5>Forecast</h5>
          <div>Day One High: {state.forecast[0].tempHigh}</div>
          <div>Day One Low: {state.forecast[0].tempLow}</div>
          <div>Day One Description: {state.forecast[0].weatherDescription}</div>
          <div>Day Two High: {state.forecast[1].tempHigh}</div>
          <div>Day Two Low: {state.forecast[1].tempLow}</div>
          <div>Day Two Description: {state.forecast[1].weatherDescription}</div>
        </>
      )}
    </>
  );
};
