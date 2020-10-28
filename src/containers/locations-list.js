/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ListItem } from '../components/list-item';
import { AddLocationForm } from './add-location-form';

export const LocationsList = props => {
	const { handleAddLocation, handleDeleteLocation, locations } = props;

	return (
		<div>
			{locations.map(location => (
                <ListItem
                    id={location.id}
                    key={location.id}
                    handleDelete={handleDeleteLocation}
                    label={`${location.city}, ${location.state}`}
                />
			))}

			<AddLocationForm addLocation={handleAddLocation} />
		</div>
	);
};