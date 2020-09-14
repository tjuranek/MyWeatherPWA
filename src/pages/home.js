/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { AddLocationForm, WeatherCard } from '../containers';
import { APP_ACTIONS } from '../reducers/app';
import { generateGuid } from '../services/guid';

export const Home = () => {
	const { state, dispatch } = useContext(AppContext);

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

	const addLocation = (city, state) => {
		const location = {
			id: generateGuid(),
			city: city,
			state: state
		};

		dispatch({
			type: APP_ACTIONS.ADD_LOCATION,
			payload: location
		});
	};

	const removeLocation = id => {
		dispatch({
			type: APP_ACTIONS.REMOVE_LOCATION,
			payload: id
		});
	};

	return (
		<div css={styles.container}>
			<h1 css={styles.header}>Mon, Aug 28th</h1>

			{state.locations.map(location => {
				return (
					<WeatherCard
						id={location.id}
						city={location.city}
						state={location.state}
						remove={removeLocation}
					/>
				);
			})}

			<AddLocationForm addLocation={addLocation} />
		</div>
	);
};
