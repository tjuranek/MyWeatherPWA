/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { WeatherCard } from '../containers/weather-card';
import { getCurrentLocation } from '../services/weather';
import { useRequest } from '../hooks/use-request';

export const Home = () => {
	const { state } = useContext(AppContext);
	const { data, isError, isLoading } = useRequest(() => getCurrentLocation());

	const locations = state.isCurrentLocationEnabled
		? [data, ...state.locations]
		: state.locations;

	if (isError) {
		alert(
			'Whoops, failed to retrieve current location data! Try again later!'
		);
		return;
	}

	if (isLoading) {
		return <p>loading...</p>;
	}

	return (
		<div>
			{locations.map(location => {
				return (
					<div key={location.id}>
						<WeatherCard
							id={location.id}
							city={location.city}
							state={location.state}
						/>
					</div>
				);
			})}
		</div>
	);
};
