/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ListItem } from '../components/list-item';
import { AddLocationForm } from './add-location-form';

export const LocationsList = props => {
	const { handleAddLocation, handleDeleteLocation, locations } = props;

	return (
		<div>
			{locations.map(location => (
				<div key={location.id}>
					<ListItem
						id={location.id}
						handleDelete={handleDeleteLocation}
						label={`${location.city}, ${location.state}`}
					/>
				</div>
			))}

			<AddLocationForm addLocation={handleAddLocation} />
		</div>
	);
};
