import React, { useEffect, useState } from 'react';
import { CurrentConditions, Forecast } from '../components';
import { getWeatherForLocation } from '../services';

export const WeatherCard = props => {
	const { city, state } = props;

	const [componentState, setComponentState] = useState({
		weatherData: {},
		isLoading: true
	});

	useEffect(() => {
		const getWeather = async () => {
			const data = await getWeatherForLocation(city, state);
			setComponentState({
				...componentState,
				weatherData: { ...data },
				isLoading: false
			});
		};

		getWeather();
	}, [componentState]);

	return (
		<>
			{componentState.isLoading ? (
				<p>loading</p>
			) : (
				<>
					<CurrentConditions
						currentConditions={
							componentState.weatherData.currentConditions
						}
					/>

					<Forecast forecast={componentState.weatherData.forecast} />
				</>
			)}
		</>
	);
};
