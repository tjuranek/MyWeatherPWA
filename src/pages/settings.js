/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useContext } from 'react';
import { AppContext } from '../app';
import { LocationsList } from '../containers/locations-list';
import { generateGuid } from '../services/guid';
import { APP_ACTIONS } from '../reducers/app';

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
		<Fragment>
			<h2>Settings</h2>
			<p>Enable current location?</p>
			<div>
				<input
					type="checkbox"
					checked={state.isCurrentLocationEnabled}
					onClick={toggleIsCurrentLocationEnabled}
				/>
			</div>

			<h4>Locations:</h4>

			<LocationsList
				locations={state.locations}
				handleAddLocation={addLocation}
				handleDeleteLocation={removeLocation}
			/>
		</Fragment>
	);
};
