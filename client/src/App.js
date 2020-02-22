import React from 'react';
import './App.css';
import Players from './components/Players';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Players />
    </div>
  );
}

export default App;
