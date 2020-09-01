import React from 'react';
import { getIconFromWeatherType } from '../icons';

export const CurrentConditions = props => {
	const { currentConditions } = props;

	return (
		<>
			<h1>
				{currentConditions.tempCurrent}
				{currentConditions.weatherDescription}
			</h1>
			<img src={getIconFromWeatherType(currentConditions.weatherType)} />
			<h3>{currentConditions.chanceOfRain}%</h3>
			<h3>{currentConditions.feelsLike}a</h3>
		</>
	);
};
