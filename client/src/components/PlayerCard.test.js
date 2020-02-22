import React from 'react';
import ReactDOM from 'react-dom';
// import { render, getByTestId } from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('PlayerCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });