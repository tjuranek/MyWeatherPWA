import React from 'react';
import { AddLocationForm, WeatherCard } from './containers';
import { useLocalStorage } from './hooks';

export const App = () => {
	const [locations] = useLocalStorage('locations', []);

	return (
		<>
			{locations.map(location => {
				const [city, state] = location.split(',');
				return <WeatherCard city={city} state={state} />;
			})}

			<AddLocationForm />
		</>
	);
};
