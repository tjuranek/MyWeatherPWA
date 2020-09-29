/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useContext } from 'react';
import { AppContext } from '../app';
import { LocationsList } from '../containers/locations-list';
import { generateGuid } from '../services/guid';
import { APP_ACTIONS } from '../reducers/app';

const styles = {
	title: {
		margin: '.5em 0'
	},
	heading: {
		fontWeight: 'bold',
		margin: '.5em 0'
	},
	checkbox: {
		marginLeft: '1em'
	},
	currentLocationContainer: {
		display: 'flex'
	}
};

export const Settings = () => {
	const { state, dispatch } = useContext(AppContext);

	const toggleIsCurrentLocationEnabled = () => {
		dispatch({
			type: APP_ACTIONS.SET_IS_CURRENT_LOCATION_ENABLED,
			payload: !state.isCurrentLocationEnabled
		});
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
		<div>
			<h2 css={styles.title}>Settings</h2>

			<h4 css={styles.heading}>Geographic</h4>
			<div css={styles.currentLocationContainer}>
				<div>Enable current location?</div>

				<div>
					<input
						checked={state.isCurrentLocationEnabled}
						css={styles.checkbox}
						onChange={toggleIsCurrentLocationEnabled}
						type="checkbox"
					/>
				</div>
			</div>

			<h4 css={{ ...styles.heading, paddingTop: '2em' }}>Locations:</h4>
			<LocationsList
				locations={state.locations}
				handleAddLocation={addLocation}
				handleDeleteLocation={removeLocation}
			/>
		</div>
	);
};
