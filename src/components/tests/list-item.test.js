import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ListItem } from '../list-item';

afterEach(cleanup);

const props = {
    id: 1,
    label: "label",
    handleDelete: jest.fn()
};

test('<ListItem />', () => {
    render(<ListItem {...props} />);

    expect(screen.queryByText(props.label)).toBeTruthy();
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(props.handleDelete).toHaveBeenCalledTimes(1);
});
