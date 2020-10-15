/** @jsx jsx */
import { jsx } from '@emotion/core';

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '.5em 0'
	},
	button: {
		background: '#3C47E9',
		border: '1px solid #E7E7EB',
		borderRadius: '.25em',
		color: '#E7E7EB',
		outline: 'none'
	}
};

export const ListItem = props => {
	const { id, label, handleDelete } = props;

	const handleDeleteItem = () => {
		handleDelete(id);
	};

	return (
		<div css={styles.container}>
			{label}
			<button css={styles.button} onClick={handleDeleteItem}>
				Delete
			</button>
		</div>
	);
};
