import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Menu } from '../menu';

afterEach(cleanup);

const mockUseHistory = jest.fn(); 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockUseHistory
    })
}));

test('<Menu />', () => {
    render(<Menu />);

    const homeButton = screen.getByText('Home');
    const settingsButton = screen.getByText('Settings');

    expect(homeButton).toBeTruthy();
    expect(settingsButton).toBeTruthy();

    fireEvent.click(homeButton);
    expect(mockUseHistory).toHaveBeenCalledWith('/');

    fireEvent.click(settingsButton);
    expect(mockUseHistory).toHaveBeenCalledWith('/settings');
});