import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App'

afterEach(cleanup)
 
it('should take a snapshot', () => {
  const { asFragment } = render(<App />)
  expect(asFragment(<App />)).toMatchSnapshot()
})

it('should render a add card button', () => {
  const { getByTestId } = render(<App />); 
  expect(getByTestId('addCard')).toBeInTheDocument();
});

it('should add a card on click add card button', () => {
  const { getByTestId } = render(<App />); 
  
  fireEvent.click(getByTestId('addCard'));

  const deleteCards = screen.getAllByTestId('deleteCard');

  expect(deleteCards).toHaveLength(2);
});