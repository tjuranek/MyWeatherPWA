import React from "react";
import { CurrentConditions, Forecast } from "../components";

export const WeatherCard = props => {
  const { weather } = props;

  return (
    <>
      <CurrentConditions tempCurrent={weather.currentConditions.tempCurrent} />

      <Forecast forecast={weather.forecast} />
    </>
  );
};
