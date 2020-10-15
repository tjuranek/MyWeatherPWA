import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Forecast } from '../forecast';

afterEach(cleanup);

const props = {
    forecast: [
        {
            tempHigh: '78',
            tempLow: '65',
            weatherType: 'Cloudy'
        },
        {
            tempHigh: '45',
            tempLow: '43',
            weatherType: 'Cloudy'
        },
        {
            tempHigh: '12',
            tempLow: '11',
            weatherType: 'Cloudy'
        }
    ]
};

test('<Forecast />', () => {
    render(<Forecast {...props} />);

    props.forecast.forEach(daily => {
        expect(screen.queryByText(`${daily.tempHigh}°/${daily.tempLow}°`)).toBeTruthy();
    });

    expect(screen.queryAllByAltText('icon')).toBeTruthy();
});