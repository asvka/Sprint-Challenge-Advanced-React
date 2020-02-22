import React from 'react';
import ReactDOM from 'react-dom';
import { render, getbyText, queryByText } from '@testing-library/react';
import Players from './Players';
import PlayerCard from './PlayerCard';
import App from '../App';

test('Players renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Players />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('PlayerCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayerCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('Alex Morgan displays', () => {
    const { queryByText } = render(<Players />);
	queryByText(/alex morgan/i);
})

test('Megan Rapinoe displays', ()=> {
    const { queryByText } = render(<Players />);
    queryByText(/megan rapinoe/i);
})

test('Marta displays', ()=> {
    const { queryByText } = render(<Players />);
    queryByText(/marta/i);
})

test('Rose Lavelle displays', ()=> {
    const { queryByText } = render(<Players />);
    queryByText(/rose lavelle/i);
})

