import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LocationsList } from '../locations-list';

afterEach(cleanup);

jest.mock('../../components/list-item', () => ({
    ...jest.requireActual('../../components/list-item'),
    ListItem: () => (<div data-testid="list-item" />)
}));

jest.mock('../add-location-form', () => ({
    ...jest.requireActual('../add-location-form'),
    AddLocationForm: () => (<div data-testid="add-location-form" />)
}));

const handleAddLocation = jest.fn();
const handleDeleteLocation = jest.fn();
const locations = [
    {
        id: 1,
        city: 'Nisswa',
        state: 'Minnesota'
    },
    {
        id: 2,
        city: 'Roseville',
        state: 'Minnesota'
    }
];

const props = { handleAddLocation, handleDeleteLocation, locations };
test('<LocationsList /> renders correct count of list items', () => {
    render(<LocationsList { ...props } />);

    expect(screen.getAllByTestId('list-item').length).toBe(locations.length);
});

test('<LocationsList /> renders add location form', () => {
    render(<LocationsList { ...props } />);

    expect(screen.getByTestId('add-location-form')).toBeTruthy();
});