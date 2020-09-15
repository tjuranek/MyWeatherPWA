/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { ListItem } from '../components/list-item';

export const LocationsList = props => {
	const { handleAddLocation, handleDeleteLocation, locations } = props;

	return (
		<Fragment>
			{locations.map(location => (
				<ListItem
					handleDelete={handleDeleteLocation}
					label={`${location.city}, ${location.state}`}
				/>
			))}
		</Fragment>
	);
};
