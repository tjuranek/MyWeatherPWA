import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { AddLocationForm } from '../add-location-form';

afterEach(cleanup);

const mockAddLocation = jest.fn();

const props = {
    addLocation: mockAddLocation
};

const getShowButtonStateNodes = () => {
    const addLocationButton = screen.getByTestId('addLocationButton');
    return { addLocationButton };
}

const getShowFormStateNodes = () => {
    const cityInput = screen.getByTestId('cityInput');
    const stateInput = screen.getByTestId('stateInput');
    const submitButton = screen.getByTestId('submitButton');
    
    return { cityInput, stateInput, submitButton }; 
}

test('<AddLocationForm /> Renders Button State', () => {
    render(<AddLocationForm { ... props } />);

    const { addLocationButton } = getShowButtonStateNodes();
    expect(addLocationButton).toBeTruthy();
});

test('<AddLocationForm /> Renders Form State After Click', () => {
    render(<AddLocationForm { ... props } />);

    const { addLocationButton } = getShowButtonStateNodes();
    fireEvent.click(addLocationButton);

    const { cityInput, stateInput, submitButton } = getShowFormStateNodes();
    expect(cityInput).toBeTruthy();
    expect(stateInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
});

test('<AddLocationForm /> Resets Form On Invalid Save', () => {
    render(<AddLocationForm { ... props } />);

    const { addLocationButton } = getShowButtonStateNodes();
    fireEvent.click(addLocationButton);

    const { submitButton } = getShowFormStateNodes();
    fireEvent.click(submitButton);
    expect(mockAddLocation).toHaveBeenCalledTimes(0);   
});

test('<AddLocationForm /> Saves Valid Form', () => {
    render(<AddLocationForm { ... props } />);

    const { addLocationButton } = getShowButtonStateNodes();
    fireEvent.click(addLocationButton);

    const { cityInput, stateInput, submitButton } = getShowFormStateNodes();

    const city = 'city';
    const state = 'state';

    fireEvent.change(cityInput, { target: { value: city } })
    expect(cityInput.value).toBe(city);

    fireEvent.change(stateInput, { target: { value: state } });
    expect(stateInput.value).toBe(state);

    fireEvent.click(submitButton);
    expect(mockAddLocation).toHaveBeenCalledTimes(1);
    expect(mockAddLocation).toHaveBeenCalledWith(city, state);
});