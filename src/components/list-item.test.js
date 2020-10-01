import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListItem } from './list-item';

const { id, label, handleDelete } = props;

describe('listitem', () => {
	test('renders label', () => {
		render(<ListItem id={1} label={'label'} handleDelete={() => {}} />);

		expect(screen.getByText('label')).toBeInTheDocument();
	});
});

/* describe('menu', () => {
	test('navigates to home page', async () => {
		render(<Menu />);

		await userEvent.click(screen.getByText('Home'));
		expect(mockHistoryPush).toHaveBeenCalledWith('/');
	});
}); */
