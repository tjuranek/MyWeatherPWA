import React from 'react';

export const CurrentConditions = props => {
	const { currentConditions } = props;

	return (
		<>
			<h1>{currentConditions.tempCurrent}</h1>
			<h3>{currentConditions.chanceOfRain}%</h3>
			<h3>{currentConditions.feelsLike}a</h3>
		</>
	);
};
