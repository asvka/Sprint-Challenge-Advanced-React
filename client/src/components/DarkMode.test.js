import React from 'react';
import ReactDOM from 'react-dom';

import DarkMode from './DarkMode';

test('DarkMode renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DarkMode />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

