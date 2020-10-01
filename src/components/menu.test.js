import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from './menu';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockHistoryPush
	})
}));

describe('menu', () => {
	test('renders menu links', () => {
		render(<Menu />);

		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Settings')).toBeInTheDocument();
	});
});

describe('menu', () => {
	test('navigates to home page', async () => {
		render(<Menu />);

		await userEvent.click(screen.getByText('Home'));
		expect(mockHistoryPush).toHaveBeenCalledWith('/');
	});
});
