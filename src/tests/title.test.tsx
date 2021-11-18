import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '../shared';

test('Title contains correct text', () => {
  render(<Title text="I'm title" />);

  const header = screen.getByRole('heading');
  expect(header).toHaveTextContent("I'm title");
});
