import React from 'react';
import ReactDOM from 'react-dom';

import DarkMode from './DarkMode';
import App from '../App';

test('DarkMode renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DarkMode />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// test('displays button', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     getByTestId(/button/i);
//     ReactDOM.unmountComponentAtNode(div);
//   });
