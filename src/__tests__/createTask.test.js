import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CreateTask from '../components/createTask';

afterEach(cleanup);

it('should render a task input on card', () => {
  const { getByTestId } = render(<CreateTask />); 
  expect(getByTestId('taskInput')).toBeInTheDocument();
});

it('should render an add task button on card', () => {
  const { getByTestId } = render(<CreateTask />); 
  expect(getByTestId('addTask')).toBeInTheDocument();
});

