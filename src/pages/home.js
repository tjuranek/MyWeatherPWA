/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { WeatherCard } from '../containers/weather-card';
import { getCurrentLocation } from '../services/weather';

export const Home = () => {
	const { state, dispatch } = useContext(AppContext);

	const locations = state.isCurrentLocationEnabled
		? [state.currentLocation, ...state.locations]
		: state.locations;

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
			{locations.map(location => {
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
