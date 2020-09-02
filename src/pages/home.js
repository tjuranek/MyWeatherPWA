/** @jsx jsx */
import { jsx } from '@emotion/core';
import { AddLocationForm, WeatherCard } from '../containers';
import { useLocalStorage } from '../hooks';

export const Home = () => {
	const [locations] = useLocalStorage('locations', []);

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
			<h1 css={styles.header}>Mon, Aug 28th</h1>

			{locations.map(location => {
				const [city, state] = location.split(',');
				return <WeatherCard city={city} state={state} />;
			})}

			<AddLocationForm />
		</div>
	);
};
