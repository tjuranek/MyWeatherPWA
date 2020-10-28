/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CurrentConditions } from '../components/current-conditions';
import { Forecast } from '../components/forecast';
import { getWeatherForLocation } from '../services/weather';
import { useRequest } from '../hooks/use-request';

export const WeatherCard = props => {
	const { city, state } = props;
	const { data, isError, isLoading } = useRequest(() =>
		getWeatherForLocation(city, state)
	);

	const styles = {
		container: {
			backgroundColor: '#1E213A',
			margin: '.5em',
			padding: '1.5em'
		},
		header: {
			fontSize: '1.25em',
			textTransform: 'uppercase'
		}
	};

	if (isError) {
		return (
			<div css={styles.container}>
				<p>error</p>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div css={styles.container}>
				<p>loading</p>
			</div>
		);
	}

	return (
		<div css={styles.container}>
			<div css={styles.header}>
				{city}, {state}
			</div>

			<CurrentConditions currentConditions={data.currentConditions} />

			<Forecast forecast={data.forecast} />
		</div>
	);
};
