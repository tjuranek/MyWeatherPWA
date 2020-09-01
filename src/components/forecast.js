import React from "react";

export const Forecast = props => {
	const { forecast } = props;

	return (
		<>
			{forecast.map(day => {
				return (
					<>
						<p>high: {day.tempHigh}</p>
						<p>low: {day.tempLow}</p>
						<p>description: {day.weatherDescription}</p>
					</>
				);
			})}
		</>
	);
};
