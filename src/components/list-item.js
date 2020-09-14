/** @jsx jsx */
import { jsx } from '@emotion/core';

export const ListItem = props => {
	const { label, handleDelete } = props;

	const styles = {};

	return <div>{label}</div>;
};
