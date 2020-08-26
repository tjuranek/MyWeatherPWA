import React, { useState, useEffect } from "react";
import { getWeatherForLocation } from "./services";

export const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      const data = await getWeatherForLocation("Roseville", "Minnesota");
      debugger;
      console.log(data);
      setState(data);
    };

    getWeather();
  }, []);

  return <div>hi</div>;
};
