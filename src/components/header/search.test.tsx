import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import {Search} from './search';

const mockFn = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<Search searchMovie={mockFn}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(' search value', async () => {
    render(<Search searchMovie={mockFn}/>)
  
    const value = 'search query';

    fireEvent.change(screen.getByRole('textbox'), {target: {value}});
    fireEvent.click(screen.getByRole('button'));

    expect(mockFn).toHaveBeenCalledWith(value);
  })