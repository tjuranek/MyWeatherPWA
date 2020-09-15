/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { WeatherCard } from '../containers/weather-card';
import { getCurrentLocation } from '../services/weather';

export const Home = () => {
	const { state, dispatch } = useContext(AppContext);

	const currentLocation = getCurrentLocation();

	const styles = {
		container: {
			marginLeft: '25%',
			marginRight: '25%',
			width: '50%'
		},
		header: {
			textAlign: 'center'
		}
	};

	return (
		<div css={styles.container}>
			<h1 css={styles.header}>
				{currentLocation.id} {currentLocation.city}{' '}
				{currentLocation.state}
			</h1>

			{state.locations.map(location => {
				return (
					<WeatherCard
						id={location.id}
						city={location.city}
						state={location.state}
					/>
				);
			})}
		</div>
	);
};
