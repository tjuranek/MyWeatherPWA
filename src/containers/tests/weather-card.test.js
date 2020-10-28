import React from 'react'
import { cleanup, render, screen } from '@testing-library/react';
import { useRequest } from '../../hooks/use-request';
import { WeatherCard } from '../weather-card';

afterEach(cleanup);

jest.mock('../../components/current-conditions', () => ({
    ...jest.requireActual('../../components/current-conditions'),
    CurrentConditions: () => (<div data-testid="current-conditions" />)
}));

jest.mock('../../components/forecast', () => ({
    ...jest.requireActual('../../components/forecast'),
    Forecast: () => (<div data-testid="forecast" />)
}));

jest.mock('../../hooks/use-request', () => ({
    useRequest: jest.fn()
}));

const city = "Nisswa";
const state = "Minnesota";
const props = { city, state };

test('<WeatherCard />', () => {
    useRequest.mockImplementation(() => ({
        data: {
            currentConditions: {},
            forecast: []
        },
        isError: false,
        isLoading: false
    }))

    render(<WeatherCard { ...props } />);

    expect(screen.getByTestId('current-conditions')).toBeTruthy();
    expect(screen.getByTestId('forecast')).toBeTruthy();
});

test('<WeatherCard has loading state/>', () => {
    useRequest.mockImplementation(() => ({
        data: {
            currentConditions: {},
            forecast: []
        },
        isError: false,
        isLoading: true
    }))

    render(<WeatherCard { ...props } />);

    expect(screen.getByText('loading')).toBeTruthy();
});

test('<WeatherCard has error state/>', () => {
    useRequest.mockImplementation(() => ({
        data: {
            currentConditions: {},
            forecast: []
        },
        isError: true,
        isLoading: false
    }))

    render(<WeatherCard { ...props } />);

    expect(screen.getByText('error')).toBeTruthy();
});