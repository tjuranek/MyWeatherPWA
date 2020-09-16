/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { ListItem } from '../components/list-item';
import { AddLocationForm } from './add-location-form';

export const LocationsList = props => {
	const { handleAddLocation, handleDeleteLocation, locations } = props;

	return (
		<Fragment>
			{locations.map(location => (
				<ListItem
					id={location.id}
					handleDelete={handleDeleteLocation}
					label={`${location.city}, ${location.state}`}
				/>
			))}

			<AddLocationForm addLocation={handleAddLocation} />
		</Fragment>
	);
};
