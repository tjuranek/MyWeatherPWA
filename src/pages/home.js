/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../app';
import { APP_ACTIONS } from '../reducers/app';
import { WeatherCard } from '../containers/weather-card';
import { getCurrentLocation } from '../services/weather';
import { useRequest } from '../hooks/use-request';

export const Home = () => {
	const { state, dispatch } = useContext(AppContext);
	const { data, isError, isLoading } = useRequest(() => getCurrentLocation());

	const locations = state.isCurrentLocationEnabled
		? [data, ...state.locations]
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
		<Fragment>
			{!isLoading && (
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
			)}
		</Fragment>
	);
};
