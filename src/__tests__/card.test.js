import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from '../components/card';

afterEach(cleanup);

it('should render a card', () => {
  const { getByTestId } = render(<Card />); 
  expect(getByTestId('card-container')).toBeInTheDocument();
});

it('should render a delete card button', () => {
  const { getByTestId } = render(<Card />); 
  expect(getByTestId('deleteCard')).toBeInTheDocument();
});

it('delete card button should be disabled', () => {
  const { getByTestId } = render(<Card />); 
  expect(getByTestId('deleteCard')).toBeDisabled();
});