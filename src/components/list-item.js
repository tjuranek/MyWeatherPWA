/** @jsx jsx */
import { jsx } from '@emotion/core';

export const ListItem = props => {
	const { id, label, handleDelete } = props;

	const handleDeleteItem = () => {
		handleDelete(id);
	};
	const styles = {};

	return (
		<div>
			{label} <button onClick={handleDeleteItem}>Remove</button>
		</div>
	);
};
