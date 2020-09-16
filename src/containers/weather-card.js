/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState, Fragment } from 'react';
import { CurrentConditions } from '../components/current-conditions';
import { Forecast } from '../components/forecast';
import { getWeatherForLocation } from '../services/weather';
import { useRequest } from '../hooks/use-request';

export const WeatherCard = props => {
	const { id, city, state } = props;
	const { data, isError, isLoading } = useRequest(() =>
		getWeatherForLocation(city, state)
	);

	const styles = {
		container: {
			border: '1px solid black'
		}
	};

	return (
		<div css={styles.container}>
			{isLoading ? (
				<p>loading</p>
			) : (
				<Fragment key={id}>
					<p>
						{city}, {state}
					</p>
					<CurrentConditions
						currentConditions={data.currentConditions}
					/>

					<Forecast forecast={data.forecast} />
				</Fragment>
			)}
		</div>
	);
};
