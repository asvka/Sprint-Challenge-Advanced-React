import React from 'react';
import ReactDOM from 'react-dom';
import render from '@testing-library/react';
import App from './App';
import DarkMode from './components/DarkMode';
import Players from './components/Players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dark mode renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Players renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players />, div);
  ReactDOM.unmountComponentAtNode(div);
});

