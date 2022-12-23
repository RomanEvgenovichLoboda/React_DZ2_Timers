import { useState } from 'react';
import Timer from '../AppTime/AppTime';
import './App.css';


function App() {
  return (
    <div className="App">
      <Timer name = "First" hours="1" minutes="30" seconds="30"></Timer>
      <Timer name = "Second" hours="0" minutes="10" seconds="0"></Timer>
      <Timer name = "Third" hours="0" minutes="0" seconds="10"></Timer>
    </div>
  );
}

export default App;