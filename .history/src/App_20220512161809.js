import './App.css';
import React from 'react';
import {BoilingVerdict, Calculator, Temperature} from './components/Temperature/Converter'

function App() {
  return (
    <div className="App">
     <BoilingVerdict />
     <Calculator />
     <Temperature />
    </div>
  );
}

export default App;
