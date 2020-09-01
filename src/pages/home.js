import React from 'react';
import { AddLocationForm, WeatherCard } from '../containers';
import { useLocalStorage } from '../hooks';

export const Home = () => {
	const [locations] = useLocalStorage('locations', []);

	return (
		<>
			<h1>Mon, Aug 28th</h1>

			{locations.map(location => {
				const [city, state] = location.split(',');
				return <WeatherCard city={city} state={state} />;
			})}

			<AddLocationForm />
		</>
	);
};
