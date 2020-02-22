import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';
import PlayerCard from './PlayerCard';

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
