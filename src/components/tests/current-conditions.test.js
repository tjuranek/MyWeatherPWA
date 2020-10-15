import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { CurrentConditions } from '../current-conditions';

afterEach(cleanup);

const props = {
    currentConditions: {
        chanceOfRain: '100',
        feelsLike: '65',
        tempCurrent: '68',
        weatherDescription: 'Rainy'
    }
};

test('<CurrentConditions />', () => {
    render(<CurrentConditions {...props} />);

    expect(screen.queryByText(`${props.currentConditions.chanceOfRain}%`)).toBeTruthy();
    expect(screen.queryByText(`${props.currentConditions.feelsLike}°`)).toBeTruthy();
    expect(screen.queryByText(`${props.currentConditions.tempCurrent}°`)).toBeTruthy();
    expect(screen.queryByText(props.currentConditions.weatherDescription)).toBeTruthy();
});
