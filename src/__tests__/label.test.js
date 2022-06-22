import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Label from '../components/label';

afterEach(cleanup);

it('should render a label on card', () => {
  const { getByTestId } = render(<Label />); 
  expect(getByTestId('label')).toBeInTheDocument();
});

it('should render input on double click', () => {
  const { getByTestId } = render(<Label />); 
  
  fireEvent.doubleClick(getByTestId('label'));

  expect(getByTestId('label-input')).toBeInTheDocument();
});
